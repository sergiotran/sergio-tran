import { NextRequest } from "next/server";
import * as articleServices from "@/features/blog/services/article.service";

export async function GET(req: NextRequest) {
  return articleServices.findAll(req);
}

export async function POST(req: NextRequest) {
  return articleServices.create(req);
}
