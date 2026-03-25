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

    getAll = async(req, res) => {
        try{
            const categories = await service.getAllCategories();
            res.status(200).json({status: 'successfull',data: categories});
        }catch(err){
            res.status(400).json({status: 'error', message: err.message}); 
        }
    }

    update = async (req,res) =>{
        try{
            const result = await service.updateCategory(req.params.name, req.body.name);
            res.status(200).json({status: 'successfully', data: result})
        }catch(err){
            res.status(400).json({status: 'error', message: err.message})
        }
    }
}

export default new CategoryController();