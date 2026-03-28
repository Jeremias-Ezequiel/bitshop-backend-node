import { Router } from "express";
import controller from "../controllers/brand.controller.js";

const router = Router();

router.get("/", controller.index);
router.post("/", controller.create);
router.delete("/:name", controller.delete);
router.put("/:name", controller.update);

export default router;
