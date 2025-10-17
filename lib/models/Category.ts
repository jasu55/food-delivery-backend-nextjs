import { Schema, model, models } from "mongoose";

const FoodCategorySchema = new Schema(
  {
    categoryName: { type: String, required: true },
  },
  { timestamps: true }
);

const FoodCategory =
  models.Foodcategory || model("Foodcategory", FoodCategorySchema);

export default FoodCategory;
