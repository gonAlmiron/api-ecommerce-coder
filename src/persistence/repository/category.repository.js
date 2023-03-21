import { asDto } from "../DTO/category.dto";
import { getDao} from "../daos/category.factory.js";

export default class CategoryRepository {
    constructor() {
        this.dao = getDao();
    }
    async save (prod) {
        const category = await this.dao.save(prod);
        return category 
    }

    async getAll() {  
        const categorys = await this.dao.getAll();
        const prodsDTO = asDto(categorys)
        return prodsDTO;
    }

    async getCategory(id) {
        const category = await this.dao.getById(id);
        return category
    }
    
    async deleteCategory(id) {
        const category = await this.dao.deleteById(id)
        return category
    }

    async updateCategory(id, category) {
        const categoryUpdate = await this.dao.updateById(id, category)
        return categoryUpdate
    }
}

