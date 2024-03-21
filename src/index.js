import app from './app.js';
import swaggerUi from 'swagger-ui-express'; 
import swaggerSpec from './swaggerConfig.js'; 

// RUTA DE LA CONFIGURACION
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('first');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
