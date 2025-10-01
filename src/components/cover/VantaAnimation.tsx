
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const VantaAnimation = ({ className = '' }: { className?: string }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();
  const particlesRef = useRef<THREE.Points>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const clockRef = useRef<THREE.Clock>();

  useEffect(() => {
    if (!vantaRef.current) return;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 20;
    
    // Use WebGL renderer with transparency
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    vantaRef.current.appendChild(renderer.domElement);

    // Create a starfield effect
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);
    const sizeArray = new Float32Array(particleCount);
    
    // Fill arrays with position, color, and size data
    for (let i = 0; i < particleCount * 3; i+=3) {
      // Position: scattered in 3D space but concentrated toward center
      const distance = Math.random() * 10;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 10;

      posArray[i] = Math.cos(angle) * distance;
      posArray[i+1] = Math.sin(angle) * distance + height;
      posArray[i+2] = (Math.random() - 0.5) * 15;
      
      // Size variation for particles
      sizeArray[i/3] = Math.random() * 0.1 + 0.05;
      
      // Color: variations of the brand blue with some white highlights
      const colorChoice = Math.random();
      if (colorChoice < 0.7) {
        // Brand blue variants (70% of particles)
        colorArray[i] = 0 / 255;  // R
        colorArray[i+1] = (93 + Math.random() * 40) / 255;  // G
        colorArray[i+2] = (254 + Math.random() * 1) / 255;  // B
      } else if (colorChoice < 0.9) {
        // Cyan/teal accents (20% of particles)
        colorArray[i] = 0 / 255;  // R
        colorArray[i+1] = (180 + Math.random() * 75) / 255;  // G
        colorArray[i+2] = (220 + Math.random() * 35) / 255;  // B
      } else {
        // White/bright blue highlights (10% of particles)
        colorArray[i] = (200 + Math.random() * 55) / 255;    // R
        colorArray[i+1] = (220 + Math.random() * 35) / 255;  // G
        colorArray[i+2] = (245 + Math.random() * 10) / 255;  // B
      }
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizeArray, 1));
    
    // Create shader material for more interactive particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.6,
      sizeAttenuation: true
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Enhanced mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      // Calculate normalized device coordinates (-1 to +1)
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      if (!particlesRef.current || !sceneRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const elapsedTime = clock.getElapsedTime();
      
      // Dynamic particle rotation based on mouse position and time
      particlesRef.current.rotation.y = elapsedTime * 0.05;
      particlesRef.current.rotation.z = elapsedTime * 0.03;
      
      // More responsive mouse influence - creates a "flow" effect
      const targetX = mousePosition.x * 0.5;
      const targetY = mousePosition.y * 0.5;
      
      particlesRef.current.rotation.x += (targetY - particlesRef.current.rotation.x) * 0.05;
      particlesRef.current.rotation.y += (targetX - particlesRef.current.rotation.y) * 0.05;
      
      // Mouse proximity effect - particles near cursor grow slightly
      const positionAttribute = particlesRef.current.geometry.getAttribute('position') as THREE.BufferAttribute;
      const sizeAttribute = particlesRef.current.geometry.getAttribute('size') as THREE.BufferAttribute;
      
      // Convert mouse position to world coordinates (approximate)
      const mouseWorld = new THREE.Vector3(mousePosition.x * 10, mousePosition.y * 10, 0);
      
      // Update particle sizes based on proximity to mouse
      for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);
        const z = positionAttribute.getZ(i);
        
        const particlePos = new THREE.Vector3(x, y, z).applyQuaternion(particlesRef.current.quaternion);
        const distance = particlePos.distanceTo(mouseWorld);
        
        // Particles close to cursor become larger
        if (distance < 3) {
          const scale = 1 + (3 - distance) / 3;
          sizeAttribute.setX(i, Math.min(0.2, scale * 0.1));
        } else {
          // Return to original size with some breathing animation
          const originalSize = 0.05 + Math.random() * 0.05;
          const currentSize = sizeAttribute.getX(i);
          sizeAttribute.setX(i, currentSize + (originalSize - currentSize) * 0.1);
        }
      }
      
      sizeAttribute.needsUpdate = true;
      
      // Particles breathing effect with subtle variation
      particlesRef.current.scale.set(
        1 + Math.sin(elapsedTime * 0.3) * 0.05, 
        1 + Math.sin(elapsedTime * 0.4) * 0.05, 
        1 + Math.sin(elapsedTime * 0.2) * 0.05
      );
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    // Store references
    particlesRef.current = particles;
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    clockRef.current = clock;
    
    // Start animation
    animationFrameId.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      if (renderer && vantaRef.current) {
        vantaRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
      
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={vantaRef}
      className={`absolute inset-0 z-0 ${className}`}
      aria-hidden="true"
      style={{
        background: 'linear-gradient(135deg, #005DFE 0%, rgba(0, 93, 254, 0.85) 100%)'
      }}
    />
  );
};

export default VantaAnimation;
