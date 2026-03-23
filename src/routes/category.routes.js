import {Router} from 'express';
import controller from '../controllers/category.controller.js';

const router = Router();

router.get("/", (req,res) => {
    res.json({message: "Hello world"});
});
// router.get("/:id");
router.post("/",controller.create);
// router.delete("/:id")

export default router;