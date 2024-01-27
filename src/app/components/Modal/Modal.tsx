import { useEffect } from 'react';

type ModalProps = {
  showModal: boolean;
  children: React.ReactNode;
};

const Modal = ({ showModal, children }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div className="w-screen h-screen bg-light-secondary dark:bg-dark-secondary fixed top-0 right-0">
      {children}
    </div>
  );
};

export default Modal;
