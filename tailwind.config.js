/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			extend: {
				backgroundImage: {
					"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
					"gradient-conic":
						"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				},
				fontFamily: {
					sans: ["Roboto", "sans-serif"],
				},
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#E3E2E2",
					secondary: "#101628",
					accent: "#FE5541"
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
