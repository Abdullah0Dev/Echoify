/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        "Roboto-Medium": ["Roboto-Medium", "sans-serif"],
        "Roboto-Bold": ["Roboto-Bold", "sans-serif"],
        "Roboto-Black": ["Roboto-Black", "sans-serif"],
        "Roboto-ExtraBold": ["Roboto-ExtraBold", "sans-serif"],
        "Roboto-SemiBold": ["Roboto-SemiBold", "sans-serif"],
        "Roboto-Thin": ["Roboto-Thin", "sans-serif"],
        "Roboto-Light": ["Roboto-Light", "sans-serif"],
        "Roboto-ExtraLight": ["Roboto-ExtraLight", "sans-serif"],
      }, 
      colors: {
        primary: {
          DEFAULT: "#07091F", //"#1F2159",
          100: '#e3f2fd', // Light electric blue
          200: '#bbdefb',
          300: '#90caf9',
          400: '#64b5f6',
          500: '#42a5f5', // Base electric blue
          600: '#2196f3',
          700: '#1e88e5',
          800: '#1976d2',
          900: '#1565c0',
        },
        primary2: {
          DEFAULT: "#07091F", //"#1F2159",
          100: "#36383F",
          200: "#20222A",
          300: "#36383F"
        },
        secondary2: {
          DEFAULT: "#FFFFFF",
          100: "#FCFCFC",
        },
        accent2: "#3945C8",
        secondary: {
          100: '#f3e5f5', // Light neon purple
          200: '#e1bee7',
          300: '#ce93d8',
          400: '#ba68c8',
          500: '#ab47bc', // Base neon purple
          600: '#9c27b0',
          700: '#8e24aa',
          800: '#7b1fa2',
          900: '#6a1b9a',
        },
        accent: {
          100: '#ede7f6', // Light lavender/pink
          200: '#d1c4e9',
          300: '#b39ddb',
          400: '#9575cd',
          500: '#7e57c2', // Lavender base
          600: '#673ab7',
          700: '#5e35b1',
          800: '#512da8',
          900: '#4527a0',
        },
        background: {
          light: '#ffffff', // Optional: for text containers
          dark: '#0d1117', // Optional: for footer/overlay
        },
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
