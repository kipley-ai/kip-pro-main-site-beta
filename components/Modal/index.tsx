import cn from "classnames";
import styles from "./Modal.module.sass";

type ModalProps = {
    className?: string;
};

const Modal = ({ children, className }: ModalProps) => {
    return <div className={cn(styles.main, className)}>{children}</div>;
};

export default Modal;
