import { Schema, model} from 'mongoose';
import { TProduct, TVarient } from './product.interface';


const varientSchema = new Schema<TVarient>({
    type: {type:String, required:true},
    value: { type: String, required: true},
   
  });
  
  const productSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: [true, "Name is required"]
      },
      description: {
        type: String,
        required: [true, "Description is required"]
      },
      price: {
        type: Number,
        required: [true, "Price is required"]
      },
      category: {
        type: String,
        required: [true, "Category is required"]
      },
      tags: {
        type: [String],
        required: [true, "Tags are required"]
      },
      variants: {
        type: [varientSchema],
        required: [true, "Variants are required"]
      },
      inventory: {
        quantity: {
          type: Number,
          required: [true, "Inventory quantity is required"]
        },
        inStock: {
          type: Boolean,
          required: [true, "Inventory inStock status is required"]
        }
      }
    },
  );

  export const Product = model<TProduct>('Product', productSchema);