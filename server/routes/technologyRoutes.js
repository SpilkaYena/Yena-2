import express from 'express';
import { getTechnologies, getTechnologyById, createTechnology, deleteTechnology } from '../controllers/technologyController.js';

const router = express.Router();

router.get('/', getTechnologies);
router.get('/:id', getTechnologyById);
router.post('/', createTechnology);
router.delete('/:id', deleteTechnology);

export default router;
