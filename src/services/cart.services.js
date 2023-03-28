import CartRepository from "../persistence/repository/cart.repository";

const cartRepository = new CartRepository

export const saveCart = async (cart) => {
    const prod = await cartRepository.save(cart)
    return prod;
};

export const getAllCarts = async() => {

    const carts = await cartRepository.getAll();
    return carts;
};

export const getCart = async(id) => {
    const cart = await cartRepository.getCart(id)
    return cart;
}

export const deleteCart = async(id) => {
    const cartDelete = await cartRepository.deleteCart(id)
    return cartDelete
}

export const updateCart = async(id, cart) => {
    const cartUpdate = await cartRepository.updateCart(id, cart)
    return cartUpdate
}

export const getByCategory = async(category) => {
    const cartByCategory = await cartRepository.getByCategory(category)
    return cartByCategory
}