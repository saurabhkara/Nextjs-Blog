import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IArticle } from "../types";
import { formatDate } from "../utils";

interface IPropTypes {
  article: IArticle;
  
}

export default function BlogCard({ article}: IPropTypes) {
  return (
    <div>
      <Link href={`/article/${article.attributes.slug}`}>
        <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article.attributes.Title}
        </h1>
      </Link>
      <div className="flex items-center my-4">
        <div className="justify-center items-center mr-2 rounded-lg overflow-hidden flex">
          <Image
            src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
            width={40}
            height={40}
          />
        </div>
        <span className="text-sm font-bold text-gray-600 mr-1">
          {article.attributes.author.data.attributes.firstname}{" "}
          {article.attributes.author.data.attributes.lastname} <span className="font-normal">on</span>
        </span>
        <span className="text-gray-400 text-sm">
          {formatDate(article.attributes.createdAt)}
        </span>
      </div>
      <div className="break-words">
        {article.attributes.shortDescription.slice(0,250)}
        {article.attributes.shortDescription.length >250 ? '...':''}
      </div>
    </div>
  );
}
