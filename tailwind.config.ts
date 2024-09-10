import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

// function withOpacityValue(variable) {
//   return ({ opacityValue }) => {
//     if (opacityValue === undefined) {
//       return `rgb(var(${variable}))`;
//     }
//     return `rgba(var(${variable}), ${opacityValue})`;
//   };
// }

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	  screens: {
		  'sm': '640px',
		  'md': '768px',
		  'lg': '1024px',
		  'xl': '1280px',
		  '2xl': '1536px',
		  '3xl': "1720px"
		},
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			gray: {
				light: "rgba(158, 158, 158, 0.1)",
				DEFAULT: "rgb(158, 158, 158)",
			},
			red: {
				light: "rgba(244, 67, 54, 0.1)",
				DEFAULT: "rgb(244, 67, 54)",
			},
			orange: {
				light: "rgba(255, 152, 0, 0.1)",
				DEFAULT: "rgb(255, 152, 0)",
			},
			"deep-orange": {
				light: "rgba(255, 87, 34, 0.1)",
				DEFAULT: "rgb(255, 87, 34)",
			},
			amber: {
				light: "rgba(255, 193, 7, 0.1)",
				DEFAULT: "rgb(255, 193, 7)",
			},
			green: {
				light: "rgba(76, 175, 80, 0.1)",
				DEFAULT: "rgb(76, 175, 80)",
			},
			teal: {
				light: "rgba(0, 150, 136, 0.1)",
				DEFAULT: "rgb(0, 150, 136)",
			},
			cyan: {
				light: "rgba(0, 188, 212, 0.1)",
				DEFAULT: "rgb(0, 188, 212)",
			},
			purple: {
				light: "rgba(156, 39, 176, 0.1)",
				DEFAULT: "rgb(156, 39, 176)",
			},
			"deep-purple": {
				light: "rgba(103, 58, 183, 0.1)",
				DEFAULT: "rgb(103, 58, 183)",
			},
			pink: {
				light: "rgba(233, 30, 99, 0.1)",
				DEFAULT: "rgb(233, 30, 99)",
			},
			dark: {
				1:'#1c1f2e',
				2: '#161925'
			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
			success: {
				DEFAULT: "var(--success)",
				"100": "var(--success-100)",
				"200": "var(--success-200)",
				"300": "var(--success-300)",
			},
			warning: {
				DEFAULT: "var(--warning)",
				"100": "var(--warning-100)",
				"200": "var(--warning-200)",
				"300": "var(--warning-300)",
			},
			error: {
				DEFAULT: "var(--error)",
				"300": "var(--error-300)",
				"100": "var(--error-100)",
				"200": "var(--error-200)",
			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		boxShadow: {
			b: "0 10px 30px 0 rgba(82,63,104,.06)",
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
