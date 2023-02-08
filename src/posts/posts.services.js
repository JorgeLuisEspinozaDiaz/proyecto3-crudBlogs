const PostController = require("./posts.controllers");

const getAllPost = (req, res) => {
    PostController.findAllPosts()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};
const getAllPostByID = (req, res) => {
    const id = req.params.id;
    PostController.findPostById(id)
        .then((data) => {
            if (data) {
                res.status(200).json(data);
            } else {
                res.status(404).json({
                    message: "Post not found",
                });
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

const deteleBlog = (req, res) => {
    const id = req.params.id;
    PostController.deletePost(id)
        .then((data) => {
            if (data) {
                res.status(204).json({
                    message: "Hola D:",
                });
            } else {
                res.status(404).json({
                    message: "product not found",
                });
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

const postNewBlog = (req, res) => {
    const newPost = req.body;
    PostController.createPost(newPost)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};
const patchBlog = (req, res) => {
    const id = req.params.id;
    const blogObj = req.body;

    PostController.updatePost(id, blogObj)
        .then((data) => {
            if (data) {
                res.status(200).json({
                    message: `Blog with id:${id} update succefully`,
                });
            } else {
                res.status(404).json({
                    message: "Blog not found",
                });
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};
const putBlog = (req, res) => {
    const id = req.params.id;
    const blogObj = req.body;

    if (!blogObj.content || !blogObj.userName || !blogObj.isPublished) {
        return res.status(400).json({
            message: "Missing Data",
            fields: {
                content: "This is my post content :D!",
                userName: "I'a Sahid, the author of this post!",
                isPublished: true,
            },
        });
    }

    PostController.updatePost(id, blogObj)
        .then((data) => {
            if (data) {
                res.status(200).json({
                    message: `Product with id:${id} update succefully`,
                });
            } else {
                res.status(404).json({
                    message: "product not found",
                });
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};
module.exports = {
    getAllPost,
    getAllPostByID,
    postNewBlog,
    patchBlog,
    putBlog,
    deteleBlog,
};
