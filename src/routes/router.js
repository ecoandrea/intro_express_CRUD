import express from 'express';
import { createItem} from '../controllers/fileController.js';

const router = express.Router();

router.post ('/data', createItem)

export default router