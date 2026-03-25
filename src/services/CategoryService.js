class CategoryService{
    constructor(categoryRepository){
        this.repository = categoryRepository;
    }

    async createCategory(data){
        if(!data.name){
            throw new Error("Name is required");
        }

        const savedCategory = this.repository.create(data);
        return savedCategory;
    }

    async getAllCategories(){
        return await this.repository.getAll();
    }

    async updateCategory(nameSearch, newName){
        if(!newName){
            throw new Error("Category name is required");
        }

        return await this.repository.update(nameSearch,newName);
    }
}

export default CategoryService;