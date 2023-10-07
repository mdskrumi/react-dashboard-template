import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ImCancelCircle } from 'react-icons/im';

interface ModalProps {
    isVisible: boolean;
    setVisible: Function;
    children?: ReactNode;
    forceClose?: boolean;
}

const Modal: React.FC<ModalProps> = ({
    isVisible,
    setVisible,
    children,
    forceClose = false,
}) => {
    const modalRoot = document.getElementById('modal');

    const bodyRef = useRef<HTMLDivElement>(null);

    return isVisible
        ? createPortal(
              <div
                  className="fixed top-0 bottom-0 left-0 right-0 bg-[#00000090] z-50"
                  onClick={(
                      e: React.MouseEvent<HTMLDivElement, MouseEvent>
                  ) => {
                      if (forceClose) {
                          return;
                      }
                      e.stopPropagation();
                      if (
                          bodyRef.current &&
                          !bodyRef.current.contains(e.target as Element)
                      ) {
                          setVisible(false);
                      }
                  }}
              >
                  <div
                      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 m-auto max-h-[90vh] max-w-[95vw] overflow-auto"
                      ref={bodyRef}
                  >
                      <span
                          className={`absolute top-3 right-3 duration-300 text-xl font-bold cursor-pointer hover:scale-110 px-2 z-10`}
                          onClick={() => setVisible(false)}
                      >
                          <ImCancelCircle />
                      </span>
                      {children}
                  </div>
              </div>,
              modalRoot!
          )
        : null;
};

export default Modal;
