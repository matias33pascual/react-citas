module.exports = {
    // purge: ["./index.html", "./src/**/*.jsx"], // remueve los estilos que no esten siendo usados
    purge: ["index.html", "./src/**/*.jsx"], // para deploy, saco el ./
    media: false,
    content: [],
    theme: {
        extend: {},
    },
    plugins: [],
};
