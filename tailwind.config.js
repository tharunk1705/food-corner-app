module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#FF96AD",
        secondary: "#FF449F",
      },
      borderColor: [
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      borderOpacity: [
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
      borderRadius: ["responsive"],
      borderStyle: ["responsive"],
      borderWidth: ["responsive"],
      backgroundImage: {
        "gradient-conic-t": "conic-gradient(at top, var(--tw-gradient-stops))",
        about:
          "url('https://images.unsplash.com/photo-1558538337-aab544368de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
