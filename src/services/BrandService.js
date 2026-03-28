class BrandService {
  constructor(repository) {
    this.repository = repository;
  }

  async createBrand(data) {
    if (!data.name) {
      throw new Error("Name is required");
    }

    const newBrand = await this.repository.create(data);
    console.log(newBrand);

    return newBrand;
  }

  async deleteBrand(name) {
    if (!name) {
      throw new Error("Name is required");
    }

    const result = await this.repository.deleteByName(name);
    return result;
  }

  async updateBrand(searchName, newName) {
    if (!searchName || !newName) {
      throw new Error("Name is required");
    }

    const result = await this.repository.update(searchName, newName);
    return result;
  }

  async getAllBrand() {
    return await this.repository.getAll();
  }
}

export default BrandService;
