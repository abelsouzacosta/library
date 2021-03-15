'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      {
        name: "Economy",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Biology",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Finance",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "IT and Software",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Marketing",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Philosophy",
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
