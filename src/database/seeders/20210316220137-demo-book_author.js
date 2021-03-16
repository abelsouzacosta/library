'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('book_author', [
      {
        book_id: 1,
        author_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        book_id: 2,
        author_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        book_id: 3,
        author_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        book_id: 4,
        author_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        book_id: 5,
        author_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        book_id: 6,
        author_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        book_id: 7,
        author_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('book_author', null, {});
  }
};
