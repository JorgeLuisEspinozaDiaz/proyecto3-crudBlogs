const Posts = require("../models/posts.models");

const findAllPosts = async () => {
    const data = await Posts.findAll();
    return data;
};

const findPostById = async (id) => {
    const data = await Posts.findOne({
        where: {
            id: id,
        },
    });
    return data;
};

const createPost = async (blogObj) => {
    const newBlog = {
        content: blogObj.content,
        userName: blogObj.userName,
        isPublished: blogObj.isPublished,
    };
    const data = await Posts.create(newBlog);
    return data;
};

const updatePost = async (id, objBlog) => {
    const data = await Posts.update(objBlog, {
        where: {
            id: id,
        },
    });
    return data;
};

const deletePost = async (id) => {
    const data = await Posts.destroy({
        where: {
            id: id,
        },
    });
    return data;
};

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost,
};
