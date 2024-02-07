import Article, { ArticleSchema } from "@/features/blog/models/article";
import { NextRequest, NextResponse } from "next/server";

export async function findAll(req: NextRequest) {
  try {
    const articles = await Article.find<ArticleSchema>();
    return NextResponse.json({
      ok: true,
      data: articles,
      error: null,
    });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      data: [],
      error,
    });
  }
}

export async function create(req: NextRequest) {
  const body = await req.json();
  try {
    await Article.create<ArticleSchema>(body);
    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      error,
    });
  }
}
