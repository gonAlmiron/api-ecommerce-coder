import { asDto } from "../DTO/cart.dto";
import { getDao} from "../daos/cart.factory";

export default class CartRepository {
    constructor() {
        this.dao = getDao();
    }
    async save (prod) {
        const cart = await this.dao.save(prod);
        return cart 
    }

    async getAll() {  
        const carts = await this.dao.getAll();
        const prodsDTO = asDto(carts)
        return prodsDTO;
    }

    async getCart(id) {
        const cart = await this.dao.getById(id);
        return cart
    }
    
    async deleteCart(id) {
        const cart = await this.dao.deleteById(id)
        return cart
    }

    async updateCart(id, cart) {
        const cartUpdate = await this.dao.updateById(id, cart)
        return cartUpdate
    }

    async getByCategory(category) {
        const cartsByCategory = await this.dao.getByCategory(category)
        return cartsByCategory
    }
}
