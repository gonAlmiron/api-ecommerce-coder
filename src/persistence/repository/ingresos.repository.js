import { asDto } from "../DTO/ingresos.dto";
import { getDao} from "../daos/ingresos.factory";

export default class IngresosRepository {
    constructor() {
        this.dao = getDao();
    }
    async save (prod) {
        const ingreso = await this.dao.save(prod);
        return ingreso;
    }

    async getAll() {  
        const ingresos = await this.dao.getAll();
        const prodsDTO = asDto(ingresos)
        return prodsDTO;
    }

    async getById(id) {
        const ingreso = await this.dao.getById(id);
        return ingreso;
    }
    
    async deleteById(id) {
        const ingreso = await this.dao.deleteById(id)
        return ingreso;
    }

    async updateById(id, ingreso) {
        const ingresoUpdate = await this.dao.updateById(id, ingreso)
        return ingresoUpdate;
    }
}

