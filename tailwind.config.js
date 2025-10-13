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
			keyframes: {
				dampedBounce: {
					"0%": { transform: "translateY(0)" },
					"15%": { transform: "translateY(-50%)" },
					"30%": { transform: "translateY(0)" },
					"45%": { transform: "translateY(-25%)" },
					"60%": { transform: "translateY(0)" },
					"72%": { transform: "translateY(-12%)" },
					"82%": { transform: "translateY(0)" },
					"90%": { transform: "translateY(-6%)" },
					"96%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(-2%)" },
				},
			},
			animation: {
				dampedBounce: "dampedBounce 1s ease-out",
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
