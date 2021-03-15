'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('books', [
      {
        title: "A Revolta de Atlas",
        description: "Romance conta a história de John Galt",
        number_of_pages: 1168,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Cantico",
        description: "Romance se passa num futuro distópico dentro de um governo Fasci Comunista",
        number_of_pages: 128,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Antifragil",
        description: "Livro dedicado ao estudo da influência da incerteza na vida e nos mercados",
        number_of_pages: 616,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Iludidos pelo acaso",
        description: "Livro dedicado a mostrar e descrever como surge a ilusão de ordem",
        number_of_pages: 328,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Previsivelmente Irracional",
        description: "Livro dedicado a estudar a irracionalidade",
        number_of_pages: 304,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('books', null, {});
  }
};
