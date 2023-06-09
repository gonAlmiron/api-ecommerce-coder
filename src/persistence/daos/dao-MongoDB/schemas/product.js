import mongoose, { Schema, model } from 'mongoose';
import { categoryCollection } from './category';

export const productsCollectionName = 'products';

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: categoryCollection,
}
},
{timestamps: true},

)

export const ProductsModel = mongoose.model(
  productsCollectionName,
  productsSchema
);