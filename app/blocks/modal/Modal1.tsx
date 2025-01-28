import React, { type ReactNode } from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal1: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
      <div className="relative p-8 rounded-lg shadow-lg max-w-4xl w-full z-60 bg-secondary">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4"
          onClick={onClose}
          aria-label="Close"
        >
          <FaTimes className="text-2xl" />
        </button>
        {/* Modal Content */}
        <div className="overflow-y-auto max-h-[80vh] p-2 pr-6">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal1;
