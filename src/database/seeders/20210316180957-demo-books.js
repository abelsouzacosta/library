'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('books', [
      {
        title: "A Revolta de Atlas",
        description: "Considerado o livro mais influente do Estados Unidos depois da Bíbla",
        number_of_pages: 1216,
        created_at: new Date(),
        updated_at: new Date(),
        publisher_id: 6
      },
      {
        title: "Cantico",
        description: "Se passa num futuro que impera uma ordem governamental totálitária",
        number_of_pages: 128,
        created_at: new Date(),
        updated_at: new Date(),
        publisher_id: 7
      },
      {
        title: "A nascente",
        description: "A nascente é um ode ao espirito da liberdade e da prosperidade humana",
        number_of_pages: 929,
        created_at: new Date(),
        updated_at: new Date(),
        publisher_id: 7
      },
      {
        title: "Antifrágil",
        description: "Revela como prosperar num mundo de incertezas",
        number_of_pages: 616,
        created_at: new Date(),
        updated_at: new Date(),
        publisher_id: 8
      },
      {
        title: "Iludidos pelo Acaso",
        description: "Mostra como eventos que ocorrem ao acaso podem afetar a vida",
        number_of_pages: 328,
        created_at: new Date(),
        updated_at: new Date(),
        publisher_id: 8
      },
      {
        title: "Arriscando a própria pele",
        description: "Mostra como o risco é um bom parâmetro para julgarmos as decisões tomadas por alguém",
        number_of_pages: 312,
        created_at: new Date(),
        updated_at: new Date(),
        publisher_id: 8
      },
      {
        title: "Previsivelmente Irracional",
        description: "Fala sobre as forças invisíveis que nos levam a tomar decisões erradas",
        number_of_pages: 304,
        created_at: new Date(),
        updated_at: new Date(),
        publisher_id: 1
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('books', null, {});
  }
};
