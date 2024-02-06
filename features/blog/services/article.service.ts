import Article, { ArticleSchema } from "@/features/blog/models/article";
import { NextRequest, NextResponse } from "next/server";

export async function findAll() {
  try {
    const articles = await Article.find<ArticleSchema>();
    return NextResponse.json(articles);
  } catch (error) {
    throw new Error("Error to get articles");
  }
}

export async function create(body: ArticleSchema) {
  try {
    await Article.create(body);
    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    throw new Error("Error to create article");
  }
}
