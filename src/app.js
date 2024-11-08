import express from 'express';
import fileRouter from './routes/router.js';

const app = express();
const PORT = 3000


// middleware para parsearJSON y datos URL-code

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use('/api/v1', fileRouter);
app.listen(PORT,  () => {
    console.log(`Servidor corriendo en el puerto 3000`)
});