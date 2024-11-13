import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); //accede a ruta donde esta ubicado el servidor
const __dirname = path.dirname(__filename) // ruta que se guardo para encontrar de manera dinamica la ruta local del proyecto y anclar donde se quiere cree el se servicio

const dataFilePath = path.join(__dirname, '../data/data.json') //se junta ruta actual y donde se crea arhivo

export const createFile = async(data) => {
    try {
        await fs.mkdir(path.dirname(dataFilePath), { recursive: true })

        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 4), 'utf-8', (err) => {
            throw new Error(`Error al crear el archivo: ${err}`)
        });
    } catch (error) {
        throw new Error(`Error al crear o guardar el archivo ${error}`)
    }
}


export const readFile = async () => {
    try {
        const data = await fs.readFile(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`No pudimos leer el archivo: ${error}`)
        return null  
    }
}