import ICategoryRepository from "../interfaces/ICategoryRepository.js";
import prisma from "../config/PrismaDatabase.js"; 

class CategoryPrismaRepository extends ICategoryRepository{
    constructor() {
        super()
    }

    async create(categoryModel){
        return await prisma.category.create({
            data: {
                name: categoryModel.name,
                description: categoryModel.description
            }
        })
    }
    async getAll(){}
    async delete(){}
}

export default CategoryPrismaRepository;
