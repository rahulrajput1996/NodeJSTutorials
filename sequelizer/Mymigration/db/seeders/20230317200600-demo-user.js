'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    // await queryInterface.bulkInsert('userlists', [
    //   {
    //     firstName: 'John1',
    //     lastName: 'Doe1',
    //     email: 'example1@example.com',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     firstName: 'John2',
    //     lastName: 'Doe2',
    //     email: 'example2@example.com',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // ], {});
    await queryInterface.addColumn("userlists", "phone", { type: Sequelize.STRING });

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
