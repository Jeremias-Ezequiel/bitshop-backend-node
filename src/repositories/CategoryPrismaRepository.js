import ICategoryRepository from "../interfaces/ICategoryRepository.js";
import prisma from "../config/PrismaDatabase.js"; 
import { ConnectionReadyEvent } from "mongodb";

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

    async getAll(){
        return await prisma.category.findMany();
    }   

    async delete(id){}

    async update(nameCat, newName){

        const category = await prisma.category.findFirst({
            where : {name : {contains : nameCat}}
        });

        if(!category){
            throw new Error("There isn't any category that match");
        }

        console.log(category.id);

        return await prisma.category.update({
            where: {id: category.id },
            data: {name: newName}
        })
    }
}

export default CategoryPrismaRepository;
