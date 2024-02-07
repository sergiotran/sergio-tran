import { Schema, model, models } from "mongoose";
import { CategorySchema } from "./category";
import { TagSchema } from "./tag";

export interface ArticleSchema {
  _id: string;
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  category: CategorySchema[];
  tag: TagSchema[];
  createdAt?: string;
  updatedAt?: string;
}
const articleSchema = new Schema<ArticleSchema>(
  {
    title: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    content: {
      type: Schema.Types.String,
      required: true,
    },
    thumbnail: {
      type: Schema.Types.String,
      require: false,
      default: "/default-thumbnail.png",
    },
    slug: {
      type: Schema.Types.String,
      required: true,
    },
    category: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    tag: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Article = models.Article || model("Article", articleSchema);

export default Article;
