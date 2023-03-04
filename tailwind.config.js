/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "1.5rem",
		},
		extend: {
			// screens: {
			// 	sm: "640px",
			// 	md: "768px",
			// 	lg: "1024px",
			// 	xl: "1280px",
			// 	"2xl": "1536px",
			// },
			fontFamily: {
				// sans: ["Lexend", ...defaultTheme.fontFamily.sans],
				// sans: ["Livvic", ...defaultTheme.fontFamily.sans],
				sans: ["var(--font-livvic)", ...defaultTheme.fontFamily.sans],
				serif: ["var(--font-museoModerno)", ...defaultTheme.fontFamily.sans],
			},
			aspectRatio: {
				"4/3": "4 / 3",
			},
			transitionDelay: {
				0: "0ms",
				50: "50ms",
				250: "250ms",
				350: "350ms",
				400: "400ms",
				450: "450ms",
				600: "600ms",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
