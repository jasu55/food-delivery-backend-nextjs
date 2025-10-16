import { Schema, model, models } from "mongoose";

const FoodSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    ingredients: { type: String, required: true },
    categoryId: { type: Schema.ObjectId, ref: "Foodcategory", required: true },
  },
  { timestamps: true }
);

export const Food = models.Food || model("Food", FoodSchema);

