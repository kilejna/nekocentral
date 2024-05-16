import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			keyframes: {
				colourCycle: {
					'0%': { 'background-position': '0% 0%' },
					'15%': { 'background-position': '50% 0%' },
					'30%': { 'background-position': '100% 50%' },
					'50%': { 'background-position': '100% 100%' },
					'70%': { 'background-position': '50% 100%' },
          '85%': { 'background-position': '0% 50%' },
					'100%': { 'background-position': '0% 0%' },
				},
			},
			animation: {
				'colour-cycle': 'colourCycle 2s linear forwards infinite',
        'spin-slow': 'spin 3s linear infinite'
			},
			fontFamily: {
				header: ['Header', 'sans-serif'],
				quicksand: ['var(--font-quicksand)', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
export default config
