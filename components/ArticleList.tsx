import React from "react";
import { IArticle } from "../types";
import BlogCard from "../components/BlogCard";
import BlogCardWithImage from "../components/BlogCardWithImage";

interface IPropTypes {
  articles: IArticle[];
}

export default function ArticleList({ articles }: IPropTypes) {
  //   console.log("articles inside ArticleList", articles);
  return (
    <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
      {articles.map((article, index) => {
        return ( index !== 1 ?
          <BlogCard article={article} key={index} />
         : 
          <BlogCardWithImage article={article} key={index}/>
        );
      })}
    </div>
  );
}
