import { createData, deleteData, getAllData, getById, getByName, updateData } from "../utils/fileUtils.js";


export const createItem = async(req, res) => {
    try {
        const data = req.body
        await createData(data);

        res.status(201).json({
            message: 'Data created Succesfully',
            status: 201,
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error at create data',
            status: 500,
            error
        })
    }
}

export const getAllItems = async(req, res) => {
    try {
        const data = await getAllData()
        
        res.status(200).json({
            message: 'Data founded succesfully',
            status: 200,
            data
        })
    } catch (error) {
        res.status(404).json({
            message: 'Data not Found',
            status: 404,
            error
        })
    }
}

export const getItemById = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const data = await getById(id)

        res.status(200).json({
            message: "Data found successfully",
            status: 200,
            data
        })
    } catch (error) {
        res.status(404).json({
            message: 'Data not Found',
            status: 404,
            error
        })
    }
}


export const getItemByName = async(req, res) => {
    try {
        const name = req.params.name
        const data = await getByName(name)

        res.status(200).json({
            message: 'Data found Successfully',
            status: 200,
            data
        })
    } catch (error) {
        res.status(404).json({
            message: "Data not Found",
            status: 404,
            error,
        });
    }
}

export const updateItems = async(req, res) => {
    try {
        const id  = Number(req.params.id);
        const newData = req.body;

        const modifiedOldData = await updateData(id, newData)

        res.status(202).json({
            message: 'Update data succesfully',
            status: 202,
            oldData : modifiedOldData,
            newData
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Error at update data',
            status: 500,
            error
        })
    }
}

export const deleteItem = async(req, res) => {
    try {
        const id = Number(req.params.id);
        await deleteData(id)

        res.status(202).json({
            message: 'Delete content successfully',
            status: 202
        })
    } catch (error) {
        res.status(500).json({
            message: 'We cannot delete content',
            status: 500,
            error
        })
    }
}