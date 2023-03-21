import mongoose, { Schema, model } from 'mongoose';
import { categoryCollection } from './category';

export const productsCollectionName = 'products';

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: categoryCollection,
    required: true,
}
},
{timestamps: true},

)

export const ProductsModel = mongoose.model(
  productsCollectionName,
  productsSchema
);