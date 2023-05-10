import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface NotificationModalProps {
    isVisible: boolean;
    setVisible: Function;
    children?: ReactNode;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
    isVisible,
    children,
}) => {
    const modalRoot = document.getElementById('modal');

    return isVisible
        ? createPortal(
              <div className="absolute overflow-y-scroll mt-[3.25rem] mr-[1.25rem] top-0 right-0 max-h-[600px] w-[375px] bg-main_dark p-2">
                  {children}
              </div>,
              modalRoot!
          )
        : null;
};

export default NotificationModal;
