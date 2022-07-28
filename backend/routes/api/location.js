const express = require('express');
const asyncHandler = require('express-async-handler');
const { Location } = require('../../db/models');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


const validateLocation = [
    check('name')
        .exists()
        .withMessage('Name cannot be empty.')
        .isLength({ min: 3, max: 100 })
        .withMessage('Name needs to be between 3 - 100 characters.'),
    check('address')
        .exists()
        .withMessage('Address cannot be empty.')
        .isLength({ min: 5, max: 50 })
        .withMessage('Address needs to be between 5 - 50 characters.'),
    check('city')
        .exists()
        .withMessage('Please provide the locations City.')
        .isLength({ min: 3, max: 50 })
        .withMessage('City needs to be between 3 - 50 characters.'),
    check('state')
        .exists()
        .withMessage('Please provide the locations State.')
        .isLength({ min: 2, max: 50 })
        .withMessage('State needs to be between 2 - 50 characters.'),
    check('country')
        .exists()
        .withMessage('Please provide the locations Country.')
        .isLength({ min: 3, max: 50 })
        .withMessage('Country needs to be between 5 - 50 characters.'),
    check('legend')
        .exists()
        .withMessage('Legend cannot be empty!.')
        .isLength({ min: 5, max: 1000 })
        .withMessage('Legends need to be between 5 - 1000 characters!'),
    handleValidationErrors
];


router.get(
    '/',
    asyncHandler(async (req, res) => {

        const data = req.body
        // console.log('this---------------', data)
        // const id = Number(locationId)
        const locations = await Location.findAll();

        // console.log(locations)
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
    validateLocation,
    asyncHandler(async (req, res) => {
        const data = req.body;

        const newLocation = await Location.create(data);

        if (newLocation) {
            const newLocations = await Location.findAll();
            if (newLocations) res.json({newLocations, newLocation})

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
    validateLocation,
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
