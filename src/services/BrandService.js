class BrandService{
    constructor(repository){
        this.repository = repository;
    }

    async createBrand(data){
        if(!data.name){
            throw new Error("Name is required");
        }

        const newBrand = await this.repository.create(data);
        console.log(newBrand);

        return newBrand;
    }
}

export default BrandService;