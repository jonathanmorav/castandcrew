
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['DM Sans', 'sans-serif'],
				grotesk: ['Space Grotesk', 'sans-serif'],
				logo: ['Space Grotesk', 'sans-serif'],
			},
			fontSize: {
				// Heading typography system
				'h1': ['60px', { lineHeight: 'normal', fontWeight: '700' }],
				'h2': ['48px', { lineHeight: 'normal', fontWeight: '700' }],
				'h3': ['36px', { lineHeight: 'normal', fontWeight: '600' }],
				'h4': ['24px', { lineHeight: 'normal', fontWeight: '600' }],
				'h5': ['20px', { lineHeight: 'normal', fontWeight: '600' }],
				// Body typography system
				'body-large': ['18px', { lineHeight: 'normal' }],
				'body': ['16px', { lineHeight: 'normal' }],
				'body-small': ['14px', { lineHeight: 'normal' }],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				// Brand colors
				brand: {
					blue: '#005DFE',
					mint: '#53EDBE',
					lightBlue: '#99BEFF',
					lightMint: '#C8FFEF',
					cream: '#EEEFE1',
					darkBlue: '#181E2A',
					gray: '#6B7280',
                    purple: '#7966F8',
                    teal: '#15CB94',
				},
				// Soft colors for backgrounds
				soft: {
					purple: '#E5DEFF',
					blue: '#D3E4FD',
					green: '#F2FCE2',
					yellow: '#FEF7CD',
					orange: '#FDE1D3',
					pink: '#FFDEE2'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: '1rem',
				'2xl': '1.5rem',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { opacity: '0.5' },
					'50%': { opacity: '1' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-out': {
					'0%': { transform: 'translateX(0)', opacity: '1' },
					'100%': { transform: 'translateX(100%)', opacity: '0' }
				},
				'fade-in-scale': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.4s ease-out forwards',
				'fade-in-scale': 'fade-in-scale 0.4s ease-out forwards',
				'pulse-subtle': 'pulse-subtle 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'slide-in': 'slide-in 0.5s ease-out forwards',
				'slide-out': 'slide-out 0.5s ease-out forwards',
			},
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
