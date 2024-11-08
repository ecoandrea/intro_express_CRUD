import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFilePath = path.join(__dirname, "../data/data.json");

export const createFile = async(data) => {
  try {
    await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
    
    await fs.writeFile(dataFilePath, JSON.stringify(data), "utf-8", (err) => {
      throw new Error(`Error al crear archivo: ${err}`);
    });
  } catch (error) {
    console.log("Error al crear o guardar el archivo", error);
  }
};

export const createData = async (data) => {
  await createFile(data);
};
