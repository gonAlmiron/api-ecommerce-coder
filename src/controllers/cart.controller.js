import { saveCart, getAllCarts, getCart, deleteCart, updateCart, getByCart } from '../services/cart.services'


export const saveController = async (req, res) => {
    try {
        const { body } = req;
        const cart = await saveCart(body);
        res.send("CART CREADO: " + cart);
    } catch (err) {
        res.status(501).send(err.message)
    }
}

export const getAllController = async (req, res) => {
    try {
        const carts = await getAllCarts();
        res.json(carts);
    } catch (err) {
        res.status(501).send(err.message)
    }
}

export const getByIdController = async (req, res) => {
    try {
        const {id} = req.params
        const cart = await getCart(id);

        if (!cart)
        return res.status(404).json({
          msgs: 'Cart not found!',
        });

        res.json(cart)
    } catch (err) {
       res.status(501).send(err.message)
    }
}

export const deleteController = async (req, res) => {
    try {
        const {id} = req.params
        const cartDeleted = await deleteCart(id)
        res.send("CART ELIMINADO: " + cartDeleted )
    } catch(err) {
        res.status(501).send(err.message)
    }
}

export const updateController = async (req, res) => {
    try {
        const {id} = req.params 
        const {body} = req
        const cartToUpdate = await getCart(id);

        if(!cartToUpdate){
            res.status(404).json({ message: 'Invalid id' })
          } else {
            const cartUpdated = await updateCart(
                        id, 
                        body
                    )
                    res.status(200).send("CART EDITADO: " + cartUpdated);
          }

    } catch (err) {
        res.status(501).send(err.message)
    }
}

export const getByCartController = async (req, res) => {
    try {
        const {cart} = req.params
        const carts = await getByCart(cart)
        res.json(carts)
    } catch (err) {
        res.status(501).send(err.message)
    }

}