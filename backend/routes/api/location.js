const express = require('express');
const asyncHandler = require('express-async-handler');
const { Location } = require('../../db/models');

const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();
router.get(
    '/',
    asyncHandler(async (req, res) => {


        const locations = await Location.findAll({ include: "Images"});

        if (locations) {
            return res.json(
                locations
            );
        }

    })
);
router.get(
    '/:locationId',
    asyncHandler(async (req, res) => {
        const {locationId} = req.params
        const location = await Location.findByPk(locationId);



        if (location) {
            return res.json(
                location
            );
        }

    })
);

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const data = req.body;

        const newLocation = await Location.create(data);


        if (newLocation) {
            const newLocations = await Location.findAll({ include: "Images"});
            if (newLocations) res.json(newLocations)

        }
    })
);
router.delete(
    '/:locationId',
    asyncHandler(async (req, res) => {
        const {locationId} = req.params;

        const deleteLocation = await Location.findByPk(locationId);
        if (deleteLocation) {
            await Location.destroy({where: {id: locationId}});
        }

        if (deleteLocation) {
            res.json(deleteLocation)

        }
    })
);
router.put(
    '/:locationId',
    asyncHandler(async (req, res) => {
        const {locationId} = req.params;
        const location = req.body;

        const updatedLocation = await Location.findByPk(locationId, { include: "Images"})
        const id = await Location.update(location, {where: {id: locationId}});

        if (updatedLocation) {
            res.json(updatedLocation)

        }
    })
);


module.exports = router;
