import IBrandRepository from '../interfaces/IBrandRepository.js';
import prisma from "../config/PrismaDatabase.js";

class BrandPrismaRepository extends IBrandRepository{
    constructor(){
        super()
    }

    async create(brand){
        return await prisma.brand.create({
            data: {
                name: brand.name,
            }
        })
    }
    async getAll(){}
    async delete(id){}
    async update(id){}
}

export default BrandPrismaRepository;