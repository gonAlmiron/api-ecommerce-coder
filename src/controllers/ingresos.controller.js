import { saveIngreso, getAllIngresos, getIngreso, deleteIngreso, updateIngreso } from '../services/ingresos.services'


export const saveController = async (req, res) => {
    
    try {
        const { body } = req;
        const ingreso = await saveIngreso(body);
        res.send("INGRESO CREADO: " + ingreso);
    } catch (err) {
        res.status(501).send(err.message)
    }
}

export const getAllController = async (req, res) => {
    try {
        const ingresos = await getAllIngresos();
        res.json(ingresos);
    } catch (err) {
        res.status(501).send(err.message)
    }
}

export const getByIdController = async (req, res) => {
    try {
        const {id} = req.params
        const ingreso = await getIngreso(id);
        res.json(ingreso)
    } catch (err) {
       res.status(501).send(err.message)
    }
}

export const deleteController = async (req, res) => {
    try {
        const {id} = req.params
        const ingresoDeleted = await deleteIngreso(id)
        res.send("INGRESO ELIMINADO: " + ingresoDeleted )
    } catch(err) {
        res.status(501).send(err.message)
    }
}

export const updateController = async (req, res) => {
    try {
        const {id} = req.params 
        const {body} = req
        const ingresoToUpdate = await getIngreso(id);

        if(!ingresoToUpdate){
            res.status(404).json({ message: 'Invalid id' })
          } else {
            const ingresoUpdated = await updateIngreso(
                        id, 
                        body
                    )
                    res.status(200).send("INGRESO EDITADO: " + ingresoUpdated);
          }

    } catch (err) {
        res.status(501).send(err.message)
    }
}