import {Schema, model} from 'mongoose';

export const MessageSchema = new Schema({
    email: {type: String, required: true},
    date:  {type: String, required: true},
    items:  {type: String, required: true},
    address:  {type: String, required: true},
},
{timestamps: true, versionKey: false})

export const MessageModel = model('cart', MessageSchema)