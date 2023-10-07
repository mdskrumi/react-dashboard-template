/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {

                // Light Theme
                ui: '#EDF4FF',
                'ui-variant': '#C5D5F0',
                surface: '#FFFFFF',
                error: '#B00020',
                text: '#475569',
                line: '#D2D4D9',
                'bg-hover': '#A7A7FC30',

                // Dark Theme
                'ui-dark': '#1b181f',
                'ui-dark-variant': '#0f0d12',
                'surface-dark': '#262329',
                'error-dark': '#CF6679',
                'text-dark': '#E2E8F0',
                'line-dark': '#303030',
                'bg-hover-dark': '#A7A7FC10',

                // Common
                primary: '#00AB55',
                'primary-variant': '#008743',
                secondary: '#03DAC6',
                'secondary-variant': '#018786',
                danger: '#ff0000',
                'danger-variant': '#ff2626',
                hint: '#797A7B',
                disable: '#7b8fab',
                overlay: '#06223F80',
            },
            keyframes: {
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                'face-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                'fade-in': {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
                'fade-out': {
                    '0%': {
                        opacity: '1',
                    },
                    '100%': {
                        opacity: '0',
                    },
                },

                spin: {
                    '0%': {
                        transform: 'rotate(0deg)',
                    },
                    '100%': {
                        transform: 'rotate(360deg)',
                    },
                },
            },
            animation: {
                'fade-in-up': 'fade-in-up 250ms ease-in-out',
                'fade-in-down': 'fade-in-down 250ms ease-in-out',
                'fade-in': 'fade-in 250ms ease-in-out',
                'fade-out': 'fade-out 250ms ease-in-out',
                spin: 'spin 1000ms linear infinite',
            },
            fontFamily: {
                custom: ['IBM Plex Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
