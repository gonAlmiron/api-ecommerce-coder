import { Schema, model } from 'mongoose';

export const IngresoSchema = new Schema({
  producto: { type: String, required: true },
  descripcion: { type: String, required: true },
  estado: { type: String},
  tipo: {type: String, required: true},
  fecha: {type: String, required: true},
  orden: {type: Number, autoincrement: true}

},
{timestamps: true}
)

export const IngresoModel = model('ingreso', IngresoSchema);