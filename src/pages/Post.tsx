import React from "react";
import { useParams } from "react-router-dom";

import Container from "../components/Container";
import Button from "../components/Button";
import AutoLinkContent from "../components/AutoLinkContent";
import useUpdateModal from "../hooks/useUpdateModal";
import usePosts from "../hooks/usePosts";
import { autoLink } from "../helpers/autoLink";

const Post = () => {
  const { postId } = useParams();
  const updateModal = useUpdateModal();
  const posts = usePosts();

  const post = posts.data.find((post) => post.id === postId);

  return (
    <Container>
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-xl font-semibold text-sky-500">위키페이지</h1>
        <Button onClick={updateModal.onOpen} label="수정" color="bg-rose-500" />
      </div>
      <div className="bg-slate-300 p-4 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-3">{post?.title}</h1>
        <div className="whitespace-pre-line">
          {autoLink(posts.data, post?.content ?? "")}
        </div>
      </div>
    </Container>
  );
};

export default Post;
