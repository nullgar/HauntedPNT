const express = require('express');
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models');

const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

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
