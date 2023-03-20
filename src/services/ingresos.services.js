import IngresosRepository from "../persistence/repository/ingresos.repository";

const ingresosRepository = new IngresosRepository

export const saveIngreso = async (ingreso) => {
    const ing = await ingresosRepository.save(ingreso)
    return ing;
};

export const getAllIngresos = async() => {
    const ingresos = await ingresosRepository.getAll();
    return ingresos;
};

export const getIngreso = async(id) => {
    const ingreso = await ingresosRepository.getById(id)
    return ingreso;
}

export const deleteIngreso = async(id) => {
    const ingresoDelete = await ingresosRepository.deleteById(id)
    return ingresoDelete;
}

export const updateIngreso = async(id, ingreso) => {
    const ingresoUpdate = await ingresosRepository.updateById(id, ingreso)
    return ingresoUpdate;
}