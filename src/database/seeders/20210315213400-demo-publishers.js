'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('publishers', [
      {
        name: "Sextante",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Gente",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Best Business",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Novatec",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Intrinseca",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Arqueiro",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Vide Editorial",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Objetiva",
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('publishers', null, {});
  }
};
