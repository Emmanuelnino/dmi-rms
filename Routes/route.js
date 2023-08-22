const express = require('express');
const router = express.Router();
const {Student,Lecturer, Results}= require('../Controller/controller');


router.post('/student', Student);
router.post('/lecturer', Lecturer);
router.post('/result',Results);

module.exports = router; 