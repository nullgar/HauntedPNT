const express = require('express');
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models');

const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

router.get(
    '/:locationId',
    asyncHandler(async (req, res) => {
        const {locationId} = req.params;
        const reviews = await Review.findAll({where: {locationId}, include: 'User' });

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

        const {locationId} = req.params;
        const data = req.body
        const review = await Review.create(data);

        if (review) {
            return res.json(
                review
            );
        }

    })
);


module.exports = router;
