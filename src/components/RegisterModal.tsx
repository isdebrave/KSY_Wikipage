import React, { useRef, useState } from "react";
import { faker } from "@faker-js/faker";

import useRegisterModal from "../hooks/useRegisterModal";
import usePosts from "../hooks/usePosts";
import Modal from "../components/Modal";
import Input from "./Input";
import Textarea from "./Textarea";
import { isValidate } from "../helpers/isValidate";

const RegisterModal = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const registerModal = useRegisterModal();
  const posts = usePosts();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = () => {
    if (!isValidate(title, content)) {
      return alert("작성하지 않은 부분이 있습니다.");
    }

    posts.addData({
      id: faker.string.nanoid(),
      title,
      content,
    });

    registerModal.onClose();
    setTitle("");
    setContent("");
  };

  const bodyContent = (
    <div className="space-y-3 mx-4">
      <Input placeholder="제목" setValue={setTitle} />
      <Textarea
        ref={textareaRef}
        placeholder="본문"
        setValue={setContent}
        value={content}
      />
    </div>
  );

  if (!registerModal.isOpen) return;

  return (
    <Modal
      onClose={() => {
        registerModal.onClose();
        setTitle("");
        setContent("");
      }}
      onSubmit={onSubmit}
      bodyContent={bodyContent}
    />
  );
};

export default RegisterModal;
