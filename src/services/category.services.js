import CategoryRepository from "../persistence/repository/category.repository";

const categoryRepository = new CategoryRepository

export const saveCategory = async (category) => {
    const prod = await categoryRepository.save(category)
    return prod;
};

export const getAllCategorys = async() => {
    const categorys = await categoryRepository.getAll();
    return categorys;
};

export const getCategory = async(id) => {
    const category = await categoryRepository.getCategory(id)
    return category;
}

export const deleteCategory = async(id) => {
    const categoryDelete = await categoryRepository.deleteCategory(id)
    return categoryDelete
}

export const updateCategory = async(id, category) => {
    const categoryUpdate = await categoryRepository.updateCategory(id, category)
    return categoryUpdate
}