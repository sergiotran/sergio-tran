import { Schema, model, models } from "mongoose";
import { ArticleSchema } from "./article";

export interface CategorySchema {
  id: string;
  title: string;
  description?: string;
  slug: string;
  articles: ArticleSchema[];
}
const categorySchema = new Schema<CategorySchema>(
  {
    title: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    description: {
      type: Schema.Types.String,
      required: false,
    },
    slug: {
      type: Schema.Types.String,
      required: true,
    },
    articles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Article",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Category = models.Category || model("Category", categorySchema);

export default Category;
