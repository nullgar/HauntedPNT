'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Images', [
    {
    locationId: 1,
    url: 'https://travelnevada.com/wp-content/uploads/2020/05/lass-id-original-1564157489-5d3b26312442e.jpg'
   },
    {
    locationId: 2,
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Hotel_Cecil_LA.jpg'
   },
    {
    locationId: 3,
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Hotel_del_Coronado_Front.jpg'
   },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Images', null, {});
  }
};
