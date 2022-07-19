'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Locations', [{
    userId: 1,
    address: '123 Street',
    city: 'Lav Vegas',
    state: 'NV',
    country: 'Unites States',
    name: 'Zac Bagans Museum',
    legend: 'Has a bunch of hauted stuff'
   }], {});
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
