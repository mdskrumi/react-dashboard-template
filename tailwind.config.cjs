/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                light: {
                    primary50: '#E8F0FE', // Very light primary color
                    primary100: '#C6DAFC', // Light primary color
                    primary200: '#94B9FA', // Light-medium primary color
                    primary300: '#5D9BF8', // Medium primary color
                    primary400: '#327FF5', // Medium-dark primary color
                    primary500: '#0057F3', // Base primary color
                    primary600: '#004AD1', // Darker primary color
                    primary700: '#003DAE', // Darker primary color
                    primary800: '#002F8B', // Darker primary color
                    primary900: '#001B57', // Darkest primary color

                    secondary50: '#FFF0F5', // Very light secondary color (blush pink)
                    secondary100: '#FFDFEB', // Light secondary color
                    secondary200: '#FFB8D1', // Light-medium secondary color
                    secondary300: '#FF8FB7', // Medium secondary color
                    secondary400: '#FF639E', // Medium-dark secondary color
                    secondary500: '#FF387D', // Base secondary color (bright magenta)
                    secondary600: '#E02371', // Darker secondary color
                    secondary700: '#C01766', // Darker secondary color
                    secondary800: '#A0105B', // Darker secondary color
                    secondary900: '#700540', // Darkest secondary color

                    accent50: '#F4F9FA', // Very light accent color (cool gray)
                    accent100: '#E1F0F5', // Light accent color
                    accent200: '#C3E1EA', // Light-medium accent color
                    accent300: '#A1CDD9', // Medium accent color
                    accent400: '#6CA6B5', // Medium-dark accent color
                    accent500: '#39808F', // Base accent color (teal)
                    accent600: '#326E7A', // Darker accent color
                    accent700: '#25525B', // Darker accent color
                    accent800: '#183743', // Darker accent color
                    accent900: '#10242B', // Darkest accent color

                    gray50: '#FDFDFD', // Keeping current grays
                    gray100: '#F7F7F7', // Keeping current grays
                    gray200: '#ECECEC', // Keeping current grays
                    gray300: '#DCDCDC', // Keeping current grays
                    gray400: '#BFBFBF', // Keeping current grays
                    gray500: '#A1A1A1', // Keeping current grays
                    gray600: '#787878', // Keeping current grays
                    gray700: '#646464', // Keeping current grays
                    gray800: '#454545', // Keeping current grays
                    gray900: '#232323', // Keeping current grays

                    success50: '#F1FAF3', // Keeping current success
                    success100: '#D9F4D4', // Keeping current success
                    success200: '#B3E7B5', // Keeping current success
                    success300: '#8CCB96', // Keeping current success
                    success400: '#66A241', // Keeping current success
                    success500: '#459A2F', // Keeping current success
                    success600: '#3B8F2A', // Keeping current success
                    success700: '#2F7923', // Keeping current success
                    success800: '#1A531E', // Keeping current success
                    success900: '#006900', // Keeping current success

                    error50: '#FFE9E9', // Lightest error color
                    error100: '#FFC6C6', // Light error color
                    error200: '#FF9999', // Medium-light error color
                    error300: '#FF6D6D', // Medium error color
                    error400: '#FF4040', // Medium-dark error color
                    error500: '#FF0000', // Bright red for error
                    error600: '#E00000', // Darker error color
                    error700: '#C00000', // Darker error color
                    error800: '#A00000', // Darker error color
                    error900: '#700000', // Darkest error color

                    info50: '#E1F6FD', // Keeping current info
                    info100: '#B0E7F9', // Keeping current info
                    info200: '#76D6F6', // Keeping current info
                    info300: '#21C2F3', // Keeping current info
                    info400: '#00B5F3', // Keeping current info
                    info500: '#00A8F2', // Keeping current info
                    info600: '#009AE4', // Keeping current info
                    info700: '#0087D0', // Keeping current info
                    info800: '#0076BD', // Keeping current info
                    info900: '#00569C', // Keeping current info

                    warning50: '#FEFDF1', // Keeping current warning
                    warning100: '#FDF5C3', // Keeping current warning
                    warning200: '#FCEC94', // Keeping current warning
                    warning300: '#F6D666', // Keeping current warning
                    warning400: '#F5C545', // Keeping current warning
                    warning500: '#F3BA35', // Keeping current warning
                    warning600: '#F3B12F', // Keeping current warning
                    warning700: '#F29F2B', // Keeping current warning
                    warning800: '#F18F28', // Keeping current warning
                    warning900: '#EF721E', // Keeping current warning
                },
                dark: {
                    primary50: '#0D1A27', // Very dark primary
                    primary100: '#142A3A', // Dark primary
                    primary200: '#1D3C4F', // Dark-medium primary
                    primary300: '#285165', // Medium-dark primary
                    primary400: '#3E7287', // Medium primary
                    primary500: '#548DAA', // Base dark primary
                    primary600: '#4A7B94', // Lighter dark primary
                    primary700: '#3F687F', // Lighter dark primary
                    primary800: '#34556B', // Lighter dark primary
                    primary900: '#1F2F47', // Lightest dark primary

                    secondary50: '#1E0F27', // Very dark secondary
                    secondary100: '#331A3C', // Dark secondary
                    secondary200: '#492551', // Dark-medium secondary
                    secondary300: '#5E3166', // Medium-dark secondary
                    secondary400: '#944B8A', // Medium secondary
                    secondary500: '#CA65AE', // Base dark secondary (rich purple)
                    secondary600: '#AB5697', // Lighter dark secondary
                    secondary700: '#8C4780', // Lighter dark secondary
                    secondary800: '#6D376A', // Lighter dark secondary
                    secondary900: '#4C2450', // Lightest dark secondary

                    accent50: '#1A1C27', // Very dark accent (charcoal)
                    accent100: '#242E3A', // Dark accent
                    accent200: '#374257', // Dark-medium accent
                    accent300: '#4A556F', // Medium-dark accent
                    accent400: '#6C7B91', // Medium accent
                    accent500: '#8E99B4', // Base dark accent (steel blue)
                    accent600: '#7D88A3', // Lighter dark accent
                    accent700: '#6B7692', // Lighter dark accent
                    accent800: '#596580', // Lighter dark accent
                    accent900: '#41465C', // Lightest dark accent

                    gray50: '#020202', // Keeping current grays
                    gray100: '#080808', // Keeping current grays
                    gray200: '#131313', // Keeping current grays
                    gray300: '#232323', // Keeping current grays
                    gray400: '#404040', // Keeping current grays
                    gray500: '#5E5E5E', // Keeping current grays
                    gray600: '#878787', // Keeping current grays
                    gray700: '#9B9B9B', // Keeping current grays
                    gray800: '#BABABA', // Keeping current grays
                    gray900: '#DDDDDD', // Keeping current grays

                    success50: '#006900', // Keeping current success
                    success100: '#1A531E', // Keeping current success
                    success200: '#2F7923', // Keeping current success
                    success300: '#3B8F2A', // Keeping current success
                    success400: '#459A2F', // Keeping current success
                    success500: '#66A241', // Keeping current success
                    success600: '#8CCB96', // Keeping current success
                    success700: '#B3E7B5', // Keeping current success
                    success800: '#D9F4D4', // Keeping current success
                    success900: '#F1FAF3', // Keeping current success

                    error50: '#330000', // Very dark error color
                    error100: '#660000', // Dark error color
                    error200: '#990000', // Dark-medium error color
                    error300: '#CC0000', // Medium-dark error color
                    error400: '#FF0000', // Bright red for error
                    error500: '#FF3333', // Medium-light error color
                    error600: '#FF6666', // Lighter error color
                    error700: '#FF9999', // Lighter error color
                    error800: '#FFCCCC', // Lighter error color
                    error900: '#FFEEEE', // Lightest error color

                    info50: '#00569C', // Keeping current info
                    info100: '#0076BD', // Keeping current info
                    info200: '#0087D0', // Keeping current info
                    info300: '#009AE4', // Keeping current info
                    info400: '#00A8F2', // Keeping current info
                    info500: '#00B5F3', // Keeping current info
                    info600: '#21C2F3', // Keeping current info
                    info700: '#76D6F6', // Keeping current info
                    info800: '#B0E7F9', // Keeping current info
                    info900: '#E1F6FD', // Keeping current info

                    warning50: '#EF721E', // Keeping current warning
                    warning100: '#F18F28', // Keeping current warning
                    warning200: '#F29F2B', // Keeping current warning
                    warning300: '#F3B12F', // Keeping current warning
                    warning400: '#F3BA35', // Keeping current warning
                    warning500: '#F5C545', // Keeping current warning
                    warning600: '#F6D666', // Keeping current warning
                    warning700: '#FCEC94', // Keeping current warning
                    warning800: '#FDF5C3', // Keeping current warning
                    warning900: '#FEFDF1', // Keeping current warning
                },
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
