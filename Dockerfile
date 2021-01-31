FROM cypress/included:6.1.0

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./package.json ./package.json

VOLUME ["/reports"]

RUN npm install

RUN npx cypress run --reporter mochawesome --reporter-options reportDir=reports,reportFilename=doc_report --spec 'cypress/integration/examples/pom_practice.js'