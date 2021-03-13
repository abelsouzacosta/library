'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('authors', [
      {
        name: "Nassin Nicholas Taleb",
        description: "Lebanese statician, born in the region of Levant",
        date_of_birth: "1960-01-01 00:00:00",
        date_of_death: null,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Ayn Rand",
        description: "Russian born philosopher, mother of Objectvism",
        date_of_birth: "1905-02-02 00:00:00",
        date_of_death: "1982-04-06",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Dan Ariely",
        description: "Israeli pshycologist",
        date_of_birth: "1967-04-29 00:00:00",
        date_of_death: null,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('authors', null, {});
  }
};
