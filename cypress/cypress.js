const cypress = require('cypress');

cypress.run({
  spec: ['./cypress/integration/tests/login/p30*.ts', './cypress/integration/tests/checkout/p30*.ts'],
});