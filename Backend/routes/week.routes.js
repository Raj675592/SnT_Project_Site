const express = require('express');
const controller = require('../controllers/week.controller');
const router = express.Router();

router.get('/project/:projectId', controller.getByProject);

module.exports = router;
