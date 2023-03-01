const { Router } = require('express');
const { userGet,
        userPost,
        userPut,
        userDelete
                     } = require('../controllers/user');

const router = Router();

//obtener informacion
router.get('/', userGet )

//actualizar data
router.put('/:id', userPut);

//agregar data
router.post('/', userPost);

//Borrar data o dar signos de eliminacion
router.delete('/', userDelete);


module.exports = router;