class ICategoryRepository{
    async create(categoryModel){throw new Error("ERR_METHOD_NOT_IMPLEMENTED: create()")}
    async getAll(){throw new Error("ERR_METHOD_NOT_IMPLEMENTED: getAll()")}
    async delete(id){throw new Error("ERR_METHOD_NOT_IMPLEMENTED: delete()")}
}

export default ICategoryRepository;