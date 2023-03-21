import mongoose from 'mongoose';

export const categoryCollection = 'category';

const categorySchema = new mongoose.Schema({
	name: {type: String, required: true},
	description : {type: String, required: true},
    // categoryId: {type: Number, required: true}
});

export const CategoryModel = mongoose.model(categoryCollection, categorySchema);