export default class ProductsDTO {
    constructor({name, price, _id, description, categoryId}) {
        this.name = name
        this.price = price
        this.id = _id
        this.description = description
        this.categoryId = categoryId
    }
}

export const asDto = (prods) => {
        if(Array.isArray(prods)) 
            return prods.map(p => new ProductsDTO(p))
        else
            return new ProductsDTO(prods)
        }


