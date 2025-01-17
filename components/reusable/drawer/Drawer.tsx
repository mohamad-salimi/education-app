import React, { FC, HTMLAttributes, ReactNode } from "react";

interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const Drawer: FC<DrawerProps> = ({ children, open, onClose, ...rest }) => {
  const handleBackdropClick = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 z-[-1] h-screen w-full bg-black bg-opacity-50"
        onClick={handleBackdropClick}
      ></div>
      <div
        className={`animate-drawer fixed bottom-0 left-0 right-0 z-50 flex max-h-[80vh] w-full flex-col overflow-auto rounded-t-2xl bg-neutral-50 shadow-lg`}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;
