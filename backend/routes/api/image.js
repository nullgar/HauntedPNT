const express = require('express');
const asyncHandler = require('express-async-handler');
const { Image } = require('../../db/models');

const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();


router.post(
    '/',
    asyncHandler(async (req, res) => {
        const image = req.body;

        const newImage = await Image.create(image);


        if (newImage) {
            const newImages = await Image.findAll();
            if (newImages) res.json(newImages);

        }
    })
);


module.exports = router;
