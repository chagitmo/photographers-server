import express, { Router } from 'express';
import { getPhotographersList, getPhotographer } from '../controller/photographersController';

const router: Router = express.Router();

router.get('/api/photographers', getPhotographersList);
router.get('/api/photographers/:id', getPhotographer);

export default router;