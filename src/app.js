const express = require("express");
const app = express();

const blogRouter = require("./posts/posts.router");

const db = require("./utils/database");

app.use(express.json());

db.authenticate()
    .then(() => {
        console.log("las credenciales de la db son correctas");
    })
    .catch((err) => {
        console.log(err);
    });

db.sync()
    .then(() => {
        console.log("la base de virus va explotar exitosamente ");
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.json({
        message: "ok",
    });
});

app.use("/api/v1", blogRouter);

app.listen(9000, () => {
    console.log("servidor ok http://localhost:9000");
});

module.exports = app;
