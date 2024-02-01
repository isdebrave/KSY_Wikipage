import React, { useEffect, useState } from "react";

import { dataType } from "../db/data";
import useNavigate from "../hooks/useNavigate";
import { Link } from "react-router-dom";

interface AutoLinkContentProps {
  posts: dataType[];
  content: string;
}

const AutoLinkContent: React.FC<AutoLinkContentProps> = ({
  posts,
  content,
}) => {
  let str = "(";
  for (let i = 0; i < posts.length; i++) {
    if (i === posts.length - 1) {
      str += posts[i].title;
    } else {
      str += posts[i].title + "|";
    }
  }
  str += ")";

  const regex = new RegExp(str, "g");

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

  return <div>{replacedContent}</div>;
};

export default AutoLinkContent;
