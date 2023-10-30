const { response, request } = require('express');


const userGet = (req = request, res = response) => {

    const {libro = "Sin nombre", page = 1, limit} = req.query;

    res.json({
        msg: 'get API - from controller',
        libro,
        page,
        limit
    });
}

const userPut = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - from controller',
        id
    });
}

const userPost = (req, res) => {
    res.json({
        msg: 'post API - from controller',
    });
}

const userDelete = (req, res) => {
    res.json({
        msg: 'delete API - from controller'
    });
}

const userPatch = (req, res) => {
    res.json({
        msg: 'patch API - from controller'
    });
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}