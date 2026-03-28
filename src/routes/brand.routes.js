import { Router } from "express";
import controller from "../controllers/brand.controller.js";

const router = Router();

router.post("/", controller.create);
router.delete("/:name", controller.delete);

export default router;
