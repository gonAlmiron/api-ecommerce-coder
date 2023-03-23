import { saveCategory, getAllCategorys, getCategory, deleteCategory, updateCategory } from '../services/category.services'


export const saveController = async (req, res) => {
    try {
        const { body } = req;
        const client = await saveCategory(body);
        res.send("CATEGORIA CREADA: " + client);
    } catch (err) {
        res.status(501).send(err.message)
    }
}

export const getAllController = async (req, res) => {
    try {
        const clients = await getAllCategorys();
        res.json(clients);
    } catch (err) {
        res.status(501).send(err.message)
    }
}

export const getByIdController = async (req, res) => {
    try {
        const {id} = req.params
        const client = await getCategory(id);
        res.json(client)
    } catch (err) {
       res.status(501).send(err.message)
    }
}

export const deleteController = async (req, res) => {
    try {
        const {id} = req.params
        const clientDeleted = await deleteCategory(id)
        res.send("CATEGORIA ELIMINADA: " + clientDeleted )
    } catch(err) {
        res.status(501).send(err.message)
    }
}

export const updateController = async (req, res) => {
    try {
        const {id} = req.params 
        const {body} = req
        const clientToUpdate = await getCategory(id);

        if(!clientToUpdate){
            res.status(404).json({ message: 'Invalid id' })
          } else {
            const clientUpdated = await updateCategory(
                        id, 
                        body
                    )
                    res.status(200).send("CATEGORIA EDITADA: " + clientUpdated);
          }

    } catch (err) {
        res.status(501).send(err.message)
    }
}