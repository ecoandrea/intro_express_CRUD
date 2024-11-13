import express from 'express'
import { createItem, deleteItem, getAllItems, getItemById, getItemByName, updateItems } from '../controllers/fileController.js';


const router = express.Router();

router.post('/data', createItem)
router.get('/data', getAllItems)
router.get('/data/id/:id', getItemById)
router.get('/data/name/:name', getItemByName)
router.put('/data/:id', updateItems)
router.delete('/data/:id', deleteItem)


export default router

