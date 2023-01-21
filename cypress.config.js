const { defineConfig } = require("cypress");

module.exports = {
  projectId: 'j164hw',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://lojaebac.ebaconline.art.br/"
  },
};
