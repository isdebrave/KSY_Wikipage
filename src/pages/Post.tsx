import React from "react";
import { Link, useParams } from "react-router-dom";

import Container from "../components/Container";
import Button from "../components/Button";
import useUpdateModal from "../hooks/useUpdateModal";
import usePosts from "../hooks/usePosts";
import { autoLink } from "../helpers/autoLink";

const Post = () => {
  const { postId } = useParams();
  const updateModal = useUpdateModal();
  const posts = usePosts();

  const post = posts.data.find((post) => post.id === postId);

  if (!post) {
    return (
      <div className="fixed inset-0 flex flex-col justify-center items-center gap-3">
        <h1 className="text-3xl font-bold">존재하지 않는 포스트입니다.</h1>
        <Link to="/" className="text-sky-500 hover:opacity-80">
          돌아가기
        </Link>
      </div>
    );
  }

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
