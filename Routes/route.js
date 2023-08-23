const express = require('express');
const router = express.Router();
const {Student,Lecturer, Results}= require('../Controller/controller');
const userController = require('./userController');

router.post('/student', Student);
router.post('/lecturer', Lecturer);
router.post('/result',Results);
router.put('/users/:id',userController.updateUser);

module.exports = router; 