import { Schema, model, models } from "mongoose";

export interface ArticleSchema {
  title: string;
  content: string;
  slug: string;
}
const articleSchema = new Schema<ArticleSchema>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

const Article = models.Article || model("Article", articleSchema);

export default Article;
