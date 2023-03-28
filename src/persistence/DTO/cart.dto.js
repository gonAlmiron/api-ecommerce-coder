export default class CartDTO {
    constructor({email, items, date, address, _id}) {
        this.email = email
        this.items = items
        this.date = date
        this.address = address
        this._id = _id
    }
}

export const asDto = (carts) => {
        if(Array.isArray(carts)) 
            return carts.map(p => new CartDTO(p))
        else
            return new CartDTO(carts)
        }


