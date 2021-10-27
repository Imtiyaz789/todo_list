const express = require('express');
const router = express.Router();
const homePage = require('../controller/home');

router.get('/', homePage.home);
router.post('/create-task', homePage.createTask);
router.get('/delete-tasks', homePage.deleteTask);
module.exports = router;