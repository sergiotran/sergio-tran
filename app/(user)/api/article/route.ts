import { NextRequest } from "next/server";
import { create, findAll } from "@/features/blog/services/article.service";

export async function GET(req: NextRequest) {
  return findAll();
}
