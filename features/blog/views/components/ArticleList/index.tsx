import { ArticleSchema } from "@/features/blog/models/article";
import Link from "next/link";
import React, { FC } from "react";

async function getData() {
  try {
    const response = await fetch(
      `${process.env.BACKEND_HOST}/api/article?order=newest`
    );
    const data = await response.json();

    return data.data as ArticleSchema[];
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong when fetching article list");
  }
}

const ArticleItem: FC<ArticleSchema> = (props) => {
  return (
    <article className="relative p-3 rounded-lg border border-gray-100">
      <h3 className="text-xl font-bold">
        <Link href={`/article/${props.slug}`}>{props.title}</Link>
      </h3>
    </article>
  );
};

const ArticleList = async () => {
  const articles = await getData();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-3">Newest Post</h2>
      <div className="flex flex-col gap-3">
        {articles.map((article) => (
          <ArticleItem key={article._id} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
