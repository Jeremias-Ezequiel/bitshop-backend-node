import CategoryService from "../services/CategoryService.js";
import CategoryPrismaRepository from "../repositories/CategoryPrismaRepository.js";

const repository = new CategoryPrismaRepository();
const service = new CategoryService(repository);

class CategoryController{
    create = async (req,res) => {
        try{
            const newCategory = await service.createCategory(req.body);
            res.status(200).json({status: 'success', data: newCategory});
        }catch(err){
            res.status(400).json({status: 'error', message: err.message});
        }
    }
}

export default new CategoryController();