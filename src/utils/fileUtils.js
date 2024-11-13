import { readFile, createFile } from "../services/fileService.js";



export const createData = async (data) => {
  const datafile = await readFile();
  let dataJson = null;
  //Operador Ternario
  !datafile || datafile.length === 0
    ? (dataJson = [data])
    : (dataJson = [...datafile, data]);

  /* if(!datafile || datafile.length === 0) {
        dataJson = [ data ]
    } else {
        dataJson = [...datafile, data ]
    }
 */
  await createFile(dataJson);
};

export const getAllData = async () => {
  const data = await readFile();
  return data;
};

export const getById = async (id) => {
  const data = await readFile();
  const usuario = data.find(usuario => usuario.id === id)

  return usuario
}

export const getByName = async (name) => {
    const data = await readFile();

    const nameNormalized = name.toLocaleLowerCase().replace(/\s+/g, '')

    const usuario = data.filter(
      (usuario) =>
        usuario.nombre.toLocaleLowerCase().replace(/\s+/g, '') === nameNormalized
    );

    return usuario
}


export const updateData = async(id, newData) => {
    const data = await readFile();
    const indexData = data.findIndex(usuario => usuario.id === id)

    if(indexData === -1) throw new Error('No pudimos encontrar el dato buscado para actualizar')

    const oldData = {...data[indexData]}
    
    
    data[indexData] = { ...newData }    
    await createFile(data)

    return oldData

}


export const deleteData = async(id) => {
  const data = await readFile();
  const newData = data.filter(usuario => usuario.id !== id);
  await createFile(newData)
}