import BrandService from "../services/BrandService.js";
import BrandPrismaRepository from "../repositories/BrandPrismaRepository.js";

const repository = new BrandPrismaRepository();
const service = new BrandService(repository);

class BrandController {
  create = async (req, res) => {
    try {
      const newBrand = await service.createBrand(req.body);
      res.status(201).json({ message: "created successfully", data: newBrand });
    } catch (err) {
      res.status(400).json({ status: "error", message: err.message });
    }
  };

  delete = async (req, res) => {
    try {
      const result = await service.deleteBrand(req.params.name);
      res.status(200).json({ status: "success", message: result });
    } catch (err) {
      res.status(400).json({ status: "error", message: err.message });
    }
  };
}

export default new BrandController();
