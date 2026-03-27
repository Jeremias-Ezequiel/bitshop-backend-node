import BrandService from '../services/BrandService.js';
import BrandPrismaRepository from '../repositories/BrandPrismaRepository.js';

const repository = new BrandPrismaRepository();
const service = new BrandService(repository);

class BrandController{
    create = async (req,res) =>{
        try{
            const newBrand = await service.createBrand(req.body);
            res.status(201).json({message : 'created successfully', data: newBrand})
        }catch(err){
            res.status(400).json({message: 'error', error: err.message});
        }
    }
}

export default new BrandController();