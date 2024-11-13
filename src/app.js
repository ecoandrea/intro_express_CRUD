import express from 'express';
import fileRouter from './routes/router.js'


const app = express()
const PORT = 3000

//Middleware para parsear datos JSON y datos URL-encode
app.use(express.json()); //que tipo de datos me estan mandando
app.use(express.urlencoded({ extended: true })) // si fuera multidatos pasaria aqui


app.use('/api/v1', fileRouter)  // esta es la ruta

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto 3000`)
})