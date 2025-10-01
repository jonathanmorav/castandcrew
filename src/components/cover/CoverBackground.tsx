
import { useState, useEffect, useRef } from 'react';

const CoverBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      mouseRef.current = { x, y };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation frame for smooth mouse following
    const animateMouseMovement = () => {
      setMousePosition(prevPos => ({
        x: prevPos.x + (mouseRef.current.x - prevPos.x) / 20,
        y: prevPos.y + (mouseRef.current.y - prevPos.y) / 20
      }));
      animationFrameId = requestAnimationFrame(animateMouseMovement);
    };
    
    let animationFrameId = requestAnimationFrame(animateMouseMovement);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* SVG Noise Filter */}
      <svg className="hidden">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0.1" />
          <feBlend in="SourceGraphic" mode="multiply" />
        </filter>
      
        <filter id="blur">
          <feGaussianBlur stdDeviation="60" />
        </filter>
      </svg>
      
      {/* Base Background Color */}
      <div className="absolute inset-0 bg-[#005DFE] opacity-60"></div>
      
      {/* Aurora Blobs - More subtle, less bright */}
      <div 
        className="absolute top-[-15%] left-[10%] w-[40%] h-[50%] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, #c5f8e9 0%, rgba(197, 248, 233, 0) 70%)',
          filter: 'blur(80px)',
          animation: 'bgAnimation1 35s infinite ease-in-out'
        }}
      />
      
      <div 
        className="absolute top-[20%] right-[5%] w-[35%] h-[40%] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, #eaf2ff 0%, rgba(234, 242, 255, 0) 70%)',
          filter: 'blur(80px)',
          animation: 'bgAnimation2 42s infinite ease-in-out',
          animationDelay: '3s'
        }}
      />
      
      <div 
        className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #53edbe 0%, rgba(83, 237, 190, 0) 70%)',
          filter: 'blur(80px)',
          animation: 'bgAnimation3 40s infinite ease-in-out',
          animationDelay: '1s'
        }}
      />
      
      <div 
        className="absolute bottom-[25%] right-[15%] w-[25%] h-[35%] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #84acf0 0%, rgba(132, 172, 240, 0) 70%)',
          filter: 'blur(80px)',
          animation: 'bgAnimation4 38s infinite ease-in-out',
          animationDelay: '4s'
        }}
      />

      {/* Overlay with noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          filter: 'url(#noise)'
        }}
      />
      
      {/* Interactive mouse follower */}
      <div 
        className="absolute w-[30vw] h-[30vw] rounded-full opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200, 255, 239, 0.2) 0%, rgba(200, 255, 239, 0.05) 50%, transparent 70%)',
          transform: `translate(${mousePosition.x * 100}%, ${mousePosition.y * 100}%) translate(-50%, -50%)`,
          filter: 'blur(60px)',
          mixBlendMode: 'screen'
        }}
      />
    </div>
  );
};

export default CoverBackground;
