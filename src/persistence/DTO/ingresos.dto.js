export default class IngresosDTO {
    constructor({producto, fecha, _id, descripcion, estado, orden}) {
        this.producto = producto
        this.fecha = fecha
        this.id = _id
        this.descripcion = descripcion
        this.estado = estado,
        this.orden = orden
    }
}

export const asDto = (ingresos) => {
        if(Array.isArray(ingresos)) 
            return ingresos.map(ing => new IngresosDTO(ing))
        else
            return new IngresosDTO(ingresos)
        }


