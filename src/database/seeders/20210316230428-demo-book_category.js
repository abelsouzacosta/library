'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('book_category', [
      {
        book_id: 1,
        category_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        book_id: 1,
        category_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  }
};
