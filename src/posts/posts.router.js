const blogServices = require("./posts.services");

const router = require("express").Router();

router.get("/posts", blogServices.getAllPost);

router.post("/posts", blogServices.postNewBlog);

router.get("/posts/:id", blogServices.getAllPostByID);

router.patch("/posts/:id", blogServices.patchBlog);

router.put("/posts/:id", blogServices.putBlog);

router.delete("/posts/:id", blogServices.deteleBlog);

module.exports = router;
