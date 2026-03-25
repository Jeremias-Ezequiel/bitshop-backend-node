import {Router} from 'express';
import controller from '../controllers/category.controller.js';

const router = Router();

router.get("/", controller.getAll);
router.post("/",controller.create);
router.put("/:name", controller.update);

export default router;