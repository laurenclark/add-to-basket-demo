module.exports = {
    client: {
        service: {
            name: "add-to-basket-demo",
            localSchemaFile: "./schema.json"
        },
        includes: ["./src/**/*.{js,ts,tsx}"],
        excludes: ["**/__tests__/**"]
    }
};
