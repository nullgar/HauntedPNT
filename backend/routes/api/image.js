const express = require('express');
const asyncHandler = require('express-async-handler');
const { Image } = require('../../db/models');

const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

router.get(
    '/',
    asyncHandler( async (req, res) => {
        const allImages = await Image.findAll();
        if (allImages) res.json(allImages);
    })
)
router.post(
    '/',
    asyncHandler(async (req, res) => {
        const image = req.body;

        const newImage = await Image.create(image);


        if (newImage) {
            // const newImages = await Image.findAll();
            res.json(newImage);

        }
    })
);


module.exports = router;
