import IBrandRepository from "../interfaces/IBrandRepository.js";
import prisma from "../config/PrismaDatabase.js";

class BrandPrismaRepository extends IBrandRepository {
  constructor() {
    super();
  }

  async create(brand) {
    return await prisma.brand.create({
      data: {
        name: brand.name,
      },
    });
  }
  async getAll() {}

  async delete(id) {
    return await prisma.delete();
  }
  async update(id) {}

  async getByName(name) {
    return await prisma.brand.findFirst({
      where: {
        name,
      },
    });
  }

  async deleteByName(name) {
    const brand = await this.getByName(name);

    if (!brand) {
      throw new Error("The name doesn't exist");
    }

    return await prisma.brand.delete({ where: { id: brand.id } });
  }
}

export default BrandPrismaRepository;
