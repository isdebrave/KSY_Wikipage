import React from "react";
import { useParams } from "react-router-dom";

import data from "../db/data";
import Container from "../components/Container";
import Button from "../components/Button";
import useUpdateModal from "../hooks/useUpdateModal";

const Post = () => {
  const { postId } = useParams();
  const updateModal = useUpdateModal();

  const post = data.find((item) => item.id === postId);

  return (
    <Container>
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-xl font-semibold text-sky-500">위키페이지</h1>
        <Button onClick={updateModal.onOpen} label="수정" color="bg-rose-500" />
      </div>
      <div className="bg-slate-300 p-4 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-3">{post?.title}</h1>
        <p>{post?.content}</p>
      </div>
    </Container>
  );
};

export default Post;
