const express = require('express');
const asyncHandler = require('express-async-handler');
const { Image } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

const validateImage = [
    check('url')
        .exists()
        .withMessage('Url cannot be empty.')
        .isLength({ min: 1, max: 150 })
        .withMessage('Url needs to be between 1 - 150 characters.')
        .matches(/^(https:\/\/).+((.jpg)|(.jpeg)|(.png)|(.svg))$/)
        .withMessage('Url needs to end in .jpg, .jpeg, .png, or .svg.'),
        handleValidationErrors
]
router.get(
    '/',
    asyncHandler( async (req, res) => {
        const allImages = await Image.findAll();
        if (allImages) res.json(allImages);
    })
)
router.post(
    '/',
    validateImage,
    asyncHandler(async (req, res) => {
        const image = req.body;

        const newImage = await Image.create(image);


        if (newImage) {
            res.json(newImage);

        }
    })
);


module.exports = router;
