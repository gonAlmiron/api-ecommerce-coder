export default class CategoryDTO {
    constructor({name, description, categoryId, _id}) {
        this.name = name
        this.description = description
        this.categoryId = categoryId,
        this._id = _id
    }
}

export const asDto = (prods) => {
        if(Array.isArray(prods)) 
            return prods.map(p => new CategoryDTO(p))
        else
            return new CategoryDTO(prods)
        }


