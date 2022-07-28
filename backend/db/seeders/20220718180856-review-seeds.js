'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [{
    locationId: 1,
    userId: 2,
    review: "Super Spooky!",
    rating: 5,
   },
   {
    locationId: 2,
    userId: 1,
    review: "Scary my guy",
    rating: 5,
   },
   {
    locationId: 3,
    userId: 1,
    review: "I would give it a 10/10 if I could!",
    rating: 5,
   }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
