const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');

const { Location } = require('../../db/models');

const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();
router.get(
    '/',
    asyncHandler(async (req, res) => {


        const locations = await Location.findAll();

        if (locations) {
            return res.json({
                locations
            });
        }

    })
);
router.get(
    '/:locationId',
    asyncHandler(async (req, res) => {


        const locations = await Location.findAll();

        if (locations) {
            return res.json({
                locations
            });
        }

    })
);

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const data = req.body;

        const newLocation = await Location.create(data);

        if (newLocation) {
            res.json(data)

        }
    })
);
router.put(
    '/',
    asyncHandler(async (req, res) => {
        const {locationId} = req.body;

        // const updatedLocation = await Location.({where : {id: locationId}});
        await setTokenCookie(res, data);
        // if (newLocation)
        res.send('ok')
    })
);


module.exports = router;
