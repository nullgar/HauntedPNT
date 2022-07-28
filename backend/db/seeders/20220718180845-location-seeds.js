'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Locations', [
    {
    userId: 1,
    address: '600 E Charleston Blvd',
    city: 'Lav Vegas',
    state: 'NV',
    country: 'Unites States',
    name: "Zak Bagans' The Haunted Museum",
    legend: "The 11,000-square foot property built in 1938 was originally owned by prominent businessman Cyril S. Through the years, hostile spirits — family members who passed away there and whose energy remains — have been rumored to roam the halls terrorizing past occupants. Some long-time Las Vegans even claim dark rituals took place in the home’s basement during the 1970s."
   },
    {
    userId: 2,
    address: '640 S Main St',
    city: 'Los Angeles',
    state: 'CA',
    country: 'Unites States',
    name: 'The Cecil Hotel',
    legend: "The Cecil Hotel is the most haunted hotel in the county, the hotel was known for hosting many murders, suicide, and other unnatural deaths, the latest death in the hotel was the death of Canadian student Elisa Lam in 2013 whose death shocked the world."
   },
    {
    userId: 3,
    address: '1500 Orange Avenue',
    city: 'Coronado',
    state: 'CA',
    country: 'Unites States',
    name: 'Hotel del Coronado',
    legend: "Its best-known ghost story centers around a woman named Kate Morgan who checked into the hotel days before her suicide in 1892. In the 1980s, a San Diego historian identified Kate Morgan as the hotel's Victorian Lady in Black ghost. After Morgan became the hotel's most famous ghost, the details surrounding the real Morgan's mysterious death became the subject of many conspiracies and ghostlore that continue to this day. But Kate Morgan may not be the only alleged ghost haunting the grand, Victorian hotel as there are over 30 documented deaths at the hotel from 1890 to 1980."
   }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Locations', null, {});
  }
};
