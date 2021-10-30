const plugin = require("tailwindcss/plugin");

module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                lightred_work: "hsl(15, 100%, 70%)",
                softblue: "hsl(195, 74%, 62%)",
                lightred_study: "hsl(348, 100%, 68%)",
                limegreen: "hsl(145, 58%, 55%)",
                softorange: "hsl(43, 84%, 65%)",
                darkblue: "hsl(235, 46%, 20%)",
                verydarkblue: "hsl(226, 43%, 10%)",
                desaturatedblue: "hsl(235, 45%, 61%)",
                paleblue: "hsl(236, 100%, 87%)",
                warmblue: "hsl(246, 80%, 60%)",
                violet: "hsl(264, 64%, 52%)",
            },
            fontFamily: {
                rubik: ["Rubik", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
