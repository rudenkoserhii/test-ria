const swaggerDefinition = {
  openapi: '3.1.0',
  info: {
    title: 'Statistics Microservice API',
    version: '1.0.0',
    description:
      'This is a REST API application for managing statistics related to listings.',
    license: {
      name: 'Licensed Under ISC',
      url: 'https://opensource.org/licenses/ISC',
    },
    contact: {
      name: 'Rudenko Serhii',
      url: 'https://github.com/rudenkoserhii',
      email: 'rudenko.serhii.v@gmail.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

export { swaggerDefinition };
