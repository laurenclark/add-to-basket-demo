module.exports = {
    client: {
        service: {
            name: "add-to-basket-demo",
            localSchemaFile: "./schema.json"
        },
        includes: ["pages/**/*.{ts,tsx,js,jsx,graphql}"],
        excludes: ["**/__tests__/**", "next-env.d.ts"]
    }
};
