import mongoose, { Schema } from "mongoose";

type categorySchemaType = {
  name: string;
};

const categorySchema = new Schema<categorySchemaType>({
  name: String,
});

export const Category =
  mongoose.models.Category ||
  mongoose.model<categorySchemaType>("Category", categorySchema);
