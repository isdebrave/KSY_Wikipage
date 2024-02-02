import React from "react";
import { Link } from "react-router-dom";

import { dataType } from "../db/data";

export const autoLink = (posts: dataType[], content: string) => {
  const titleArray = posts.map((post) => post.title);
  const titleRegex =
    "(" + titleArray.sort((a, b) => b.length - a.length).join("|") + ")";

  const regex = new RegExp(titleRegex, "g");

  const replacedContent = content.split(regex).map((string, idx) => {
    if (idx % 2 === 0) {
      return string;
    } else {
      const title = string;
      const post = posts.find((post) => post.title === title)!;

      return (
        <Link
          key={post.id}
          to={`/post/${post.id}`}
          className="hover:text-sky-500 hover:underline"
        >
          {title}
        </Link>
      );
    }
  });

  return replacedContent;
};
