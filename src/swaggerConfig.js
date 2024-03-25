import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API-Domotica',
      version: '1.0.0',
      description: 'Esta es la API del proyecto integrador de un sistema IOT para el control de dispositivos de una casa inteligente.',
    },
    tags: [
      {
        name: 'Sensores', 
        description: 'Endpoints para el manejo de todos los recursos', 
      },
    ],
  },
  apis: ['./src/routes/**/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);


export default swaggerSpec;
