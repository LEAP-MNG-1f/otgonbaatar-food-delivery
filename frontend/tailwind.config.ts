import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: "640px", // => @media (min-width: 640px) { ... }
        md: "1024px", // => @media (min-width: 1024px) { ... }
        lg: "1280px", // => @media (min-width: 1280px) { ... }
        xl: "1536px", // => @media (min-width: 1536px) { ... }
        "2xl": "1920px", // => @media (min-width: 1920px) { ... }
      },
      fontFamily: {
        "sf-pro": ["SF Pro", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
