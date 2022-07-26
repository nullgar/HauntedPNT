const express = require('express');
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

const validateRevies = [
    check('review')
        .exists()
        .withMessage('Reviews cannot be empty')
        .isLength({ min: 1, max: 250 })
        .withMessage('Reviews needs to be between 1 - 250 characters.'),
    check('rating')
    .exists()
    .withMessage('You need to have a Star Rating')
    .matches(/\d+/)
    .withMessage('Rating needs to be a number!')
    .matches(/^[1-9]\d*$/)
    .withMessage('Review needs to have a Star Rating!')
    ,
    handleValidationErrors
]
router.get(
    '/',
    asyncHandler(async (req, res) => {
        const reviews = await Review.findAll({ include: 'User' });

        if (reviews) {
            return res.json(
                reviews
            );
        }

    })
);
router.post(
    '/new',
    validateRevies,
    asyncHandler(async (req, res) => {

        const data = req.body
        const result = await Review.create(data);
        const review = await Review.findOne({where: {id: result.id}, include: 'User' });

        if (review) {
            return res.json(
                review
            );
        }

    })
);
router.delete(
    '/:reviewId',
    asyncHandler(async (req, res) => {

        const {reviewId} = req.params
        const result = await Review.findByPk(reviewId);
        if (result) {
            result.destroy();
            return res.json(
                result
            );
        }

    })
);


module.exports = router;
