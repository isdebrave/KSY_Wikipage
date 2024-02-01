import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import useUpdateModal from "../hooks/useUpdateModal";
import usePosts from "../hooks/usePosts";
import Modal from "./Modal";
import Input from "./Input";
import Textarea from "./Textarea";
import { isValidate } from "../helpers/isValidate";

const UpdateModal = () => {
  const { postId } = useParams();
  const updateModal = useUpdateModal();
  const posts = usePosts();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const post = posts.data.find((post) => post.id === postId);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);

  useEffect(() => {
    setTitle(post?.title);
    setContent(post?.content);
  }, [post]);

  const onSubmit = () => {
    if (!isValidate(title ?? "", content ?? "")) {
      return alert("작성하지 않은 부분이 있습니다.");
    }

    posts.updateData({
      id: post?.id ?? "",
      title: title ?? "",
      content: content ?? "",
    });

    updateModal.onClose();
    setTitle(post?.title);
    setContent(post?.content);
  };

  const bodyContent = (
    <div className="space-y-3">
      <Input placeholder="제목" setValue={setTitle} value={title} />
      <Textarea
        ref={textareaRef}
        placeholder="본문"
        setValue={setContent}
        value={content}
      />
    </div>
  );

  if (!updateModal.isOpen) return;

  return (
    <Modal
      onClose={() => {
        updateModal.onClose();
        setTitle(post?.title);
        setContent(post?.content);
      }}
      onSubmit={onSubmit}
      bodyContent={bodyContent}
    />
  );
};

export default UpdateModal;
