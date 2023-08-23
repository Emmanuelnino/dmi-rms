const express = require('express');
const router = express.Router();
const {Student,Lecturer, Results, updateUser, deleteUser}= require('../Controller/controller');


router.post('/student', Student);
router.post('/lecturer', Lecturer);
router.post('/result',Results);
router.put('/student/:id',updateUser);
router.delete('/student/:id',deleteUser);
router.delete('/lecturer/:id',deleteUser);

module.exports = router; 