const express = require('express');
const controller = require('../controllers/project.controller');
const router = express.Router();

router.get('/', controller.getAll);
router.get('/tag/:tagId', controller.getByTag);
router.get('/club/:clubId', controller.getByClub);

module.exports = router;
