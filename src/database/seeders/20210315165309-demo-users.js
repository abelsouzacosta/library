'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: "Abel Souza Costa Junior",
        email: "abelsouzacosta@gmail.com",
        password: "123456",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Caio Martins Cabral",
        email: "caio@gmail.com",
        password: "1233456",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Larissa Motta Maia",
        email: "larissa@email.com",
        password: "123456",
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
