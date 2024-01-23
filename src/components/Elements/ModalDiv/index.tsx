import { ReactNode } from 'react';
import { ImCancelCircle } from 'react-icons/im';

interface ModalProps {
    isVisible: boolean;
    setVisible: Function;
    children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, setVisible, children }) => {
    return isVisible ? (
        <div
            className="fixed top-0 bottom-0 left-0 right-0 bg-[#00000090] z-50"
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                e.stopPropagation();
            }}
        >
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 m-auto max-h-[90vh] overflow-auto">
                <span
                    className={`absolute top-3 right-3 duration-300 text-xl font-bold cursor-pointer hover:scale-110 px-2 z-10`}
                    onClick={() => setVisible(false)}
                >
                    <ImCancelCircle />
                </span>
                {children}
            </div>
        </div>
    ) : null;
};

export default Modal;
