const express = require('express');
const router = express.Router();
const {uploadFile, upload} = require('../controllers/fileUploadController');

router.post('/upload', upload.single('image'), uploadFile);

module.exports = router;