const { response } = require('express');

const userGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    })
};

const userPut = (req, res = response) => {

    const id = req.params.id;    //si necesitemos mas valores 
                                //const {id} = req.params;
    res.json({
        ok: true,
        msg:"put API - controlador",
        id
    })
};

//agregar data
const userPost = (req, res = response) => {
    
    const {nombre, edad} = req.body;
    
    res.status(201).json({
        ok: true,
        msg:"post API - controlador",
        nombre,
        edad
    })
};

//Borrar data o dar signos de eliminacion
const userDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg:"delete API - controlador"
    })
};

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
}
