/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                // Light Theme
                ui: '#FFFFFF',
                surface: '#FCFCFC',
                error: '#B00020',
                text: '#000000',
                line: '#CDCDCD',

                // Dark Theme
                'ui-dark': '#181818',
                'surface-dark': '#141414',
                'error-dark': '#CF6679',
                'text-dark': '#FFFFFF',
                'line-dark': '#242424',

                // Common
                primary: '#00AB55',
                'primary-varient': '#008743',
                secondary: '#03DAC6',
                'secondary-varient': '#018786',
                link: '#2000CC',
                'link-varient': '#0044CC',
                danger: '#ff0000',
                'danger-varient': '#ff2626',
            },
        },
    },
    plugins: [],
};
