import React from "react";
import { useParams } from "react-router-dom";

import useUpdateModal from "../hooks/useUpdateModal";
import Modal from "./Modal";
import data from "../db/data";

const UpdateModal = () => {
  const { postId } = useParams();
  const updateModal = useUpdateModal();

  if (!updateModal.isOpen) return;

  const post = data.find((item) => item.id === postId);

  const bodyContent = (
    <div className="space-y-3">
      <input
        className="text-4xl font-bold"
        placeholder="제목"
        value={post?.title}
      />
      <p>{post?.content}</p>
    </div>
  );

  return (
    <Modal
      onClose={updateModal.onClose}
      onSubmit={() => {}}
      bodyContent={bodyContent}
    />
  );
};

export default UpdateModal;
