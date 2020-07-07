const express = require('express');
const router = express.Router();
const controller_users = require('../controllers/controller_users');
const controller_projetos = require('../controllers/controller_projetos');


router.post('/user_create',controller_users.user_create);
router.get('/users_list', controller_users.users_list);
router.get('/projetos_list', controller_projetos.projetos_list);
router.get('/projetos_detail/:id', controller_projetos.projeto_detail);
router.get('/user_detail/:id',controller_users.user_detail);




module.exports = router;