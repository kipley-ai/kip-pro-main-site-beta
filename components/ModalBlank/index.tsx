import { ReactNode } from "react";
import styles from "./ModalBlank.module.sass";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalBlank: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`${styles.modal} ${isOpen ? styles.open : ""}`}
      onClick={onClose}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalBlank;
