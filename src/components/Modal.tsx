import React from "react";

import Button from "./Button";

interface ModalProps {
  onClose: () => void;
  onSubmit: () => void;
  bodyContent: React.ReactElement;
}

const Modal: React.FC<ModalProps> = ({ onClose, onSubmit, bodyContent }) => {
  return (
    <div className="fixed z-20 inset-0 bg-black/40">
      <div
        onClick={onClose}
        className="w-full h-full flex justify-center items-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="max-w-2xl w-full bg-white p-4 rounded-lg space-y-4"
        >
          {bodyContent}

          <div className="flex justify-end gap-1">
            <Button onClick={onClose} label="취소" color="bg-rose-500" />
            <Button onClick={onSubmit} label="저장" color="bg-sky-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
