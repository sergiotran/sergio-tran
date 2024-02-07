import { Schema, model, models } from "mongoose";
import { ArticleSchema } from "./article";

export interface TagSchema {
  id: string;
  title: string;
  description?: string;
  slug: string;
  articles: ArticleSchema[];
}
const tagSchema = new Schema<TagSchema>(
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

const Tag = models.Tag || model("Tag", tagSchema);

export default Tag;
