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
        className="fixed inset-0 z-[-1] h-screen w-full bg-neutral-200 bg-opacity-60"
        onClick={handleBackdropClick}
      ></div>
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 flex max-h-[80vh] w-full animate-drawer flex-col overflow-auto rounded-t-3xl bg-white shadow-lg`}
        {...rest}
      >
        <span className="mx-auto my-0 flex h-2 w-[100px] rounded-[0px_0px_200px_200px] bg-primary"></span>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
