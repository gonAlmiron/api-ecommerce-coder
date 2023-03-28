import { saveCategory, getAllCategorys, getCategory, deleteCategory, updateCategory } from '../services/category.services'


export const saveController = async (req, res) => {
    try {
        const { body } = req;
        const category = await saveCategory(body);
        res.send("CATEGORIA CREADA: " + category);
    } catch (err) {
        res.status(501).send(err.message)
    }
}

export const getAllController = async (req, res) => {
    try {
        const categorys = await getAllCategorys();
        res.json(categorys);
    } catch (err) {
        res.status(501).send(err.message)
    }
}

export const getByIdController = async (req, res) => {
    try {
        const {id} = req.params
        const category = await getCategory(id);
        res.json(category)
    } catch (err) {
       res.status(501).send(err.message)
    }
}

export const deleteController = async (req, res) => {
    try {
        const {id} = req.params
        const categoryDeleted = await deleteCategory(id)
        res.send("CATEGORIA ELIMINADA: " + categoryDeleted )
    } catch(err) {
        res.status(501).send(err.message)
    }
}

export const updateController = async (req, res) => {
    try {
        const {id} = req.params 
        const {body} = req
        const categoryToUpdate = await getCategory(id);

        if(!categoryToUpdate){
            res.status(404).json({ message: 'Invalid id' })
          } else {
            const categoryUpdated = await updateCategory(
                        id, 
                        body
                    )
                    res.status(200).send("CATEGORIA EDITADA: " + categoryUpdated);
          }

    } catch (err) {
        res.status(501).send(err.message)
    }
}