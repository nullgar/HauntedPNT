const express = require('express');
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models');

const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

router.get(
    '/:locationId',
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
    '/:locationId/new',
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


module.exports = router;
