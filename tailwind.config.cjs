/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                main: '#1a242f',
                main_light: '#42566b',
                main_dark: '#0f1821',
                primary: '#2775ab',
                primary_light: '#98c9eb',
                primary_dark: '#033557',
                secondary: '#b59818',
                secondary_light: '#f5d547',
                secondary_dark: '#705d08',
                danger: '#ff0000',
                green: '#00ff00',
            },
        },
    },
    plugins: [],
};
