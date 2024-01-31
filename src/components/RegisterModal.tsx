import React from "react";

import useRegisterModal from "../hooks/useRegisterModal";
import Modal from "../components/Modal";

const RegisterModal = () => {
  const registerModal = useRegisterModal();

  if (!registerModal.isOpen) return;

  const bodyContent = (
    <div className="space-y-3">
      <input className="text-4xl font-bold" placeholder="제목" />
      <p>본문</p>
    </div>
  );

  return (
    <Modal
      onClose={registerModal.onClose}
      onSubmit={() => {}}
      bodyContent={bodyContent}
    />
  );
};

export default RegisterModal;
