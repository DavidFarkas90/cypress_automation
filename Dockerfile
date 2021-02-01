FROM cypress/included:6.1.0

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./package.json ./package.json

RUN npm install