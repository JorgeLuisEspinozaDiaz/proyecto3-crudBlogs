require("dotenv").config();

const config = {
    api: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST,
    },
    db: {
        develpment: {
            dialect: "postgres",
            host: "localhost",
            username: "postgres",
            password: "root",
            database: "blog-db",
            define: {
                timestamps: true,
                underscored: true,
            },
        },
        test: {},
        production: {},
    },
};
module.exports = config;
