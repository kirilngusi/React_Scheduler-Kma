module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/index.html"],

    theme: {
        extend: {
            colors: {
                tooltip: "rgb(11, 128, 67)",
                white: "#ffffff",
                key: "-webkit-linear-gradient(#27EF9F, #0DB8DE)",
                fomrlogin:
                    "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
                darkslategray: "rgb(30,41,59)",
                textdark: "#b9bbbe",
                steelblue: "#5386a5",
            },
        },
    },
    plugins: [],
};
