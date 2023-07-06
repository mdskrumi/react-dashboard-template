import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    isVisible: boolean;
    setVisible: Function;
    children?: ReactNode;
    light?: boolean;
}

const Modal: React.FC<ModalProps> = ({
    isVisible,
    setVisible,
    children,
    light = false,
}) => {
    const modalRoot = document.getElementById('modal');

    const bodyRef = useRef<HTMLDivElement>(null);

    return isVisible
        ? createPortal(
              <div
                  className="fixed top-0 bottom-0 left-0 right-0 bg-[#00000090] z-auto"
                  onClick={(
                      e: React.MouseEvent<HTMLDivElement, MouseEvent>
                  ) => {
                      e.stopPropagation();
                      if (
                          bodyRef.current &&
                          !bodyRef.current.contains(e.target as Element)
                      ) {
                          //   setVisible(false);
                      }
                  }}
              >
                  <div
                      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
                      ref={bodyRef}
                  >
                      <span
                          className={`absolute right-0 duration-300 ${
                              light ? 'text-black' : 'text-white'
                          }  text-xl font-bold cursor-pointer hover:scale-125 px-2`}
                          onClick={() => setVisible(false)}
                      >
                          x
                      </span>
                      {children}
                  </div>
              </div>,
              modalRoot!
          )
        : null;
};

export default Modal;
