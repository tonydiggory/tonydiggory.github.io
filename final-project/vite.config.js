const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                category: resolve(__dirname, "category.html"),
                detail: resolve(__dirname, "detail.html"),
                cart: resolve(__dirname, "cart.html"),
                guide: resolve(__dirname, "guide.html"),
            },
        },
    },
});