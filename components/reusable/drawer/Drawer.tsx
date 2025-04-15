import React, { FC, HTMLAttributes, ReactNode } from "react";

interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  fullHeight?: boolean;
}

const Drawer: FC<DrawerProps> = ({
  children,
  open,
  onClose,
  fullHeight = false,
  ...rest
}) => {
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
    <div className="fixed inset-0 z-50 mx-auto max-w-[500px] overflow-y-auto">
      <div
        className="fixed inset-0 z-[-1] mx-auto h-screen w-full max-w-[500px] bg-neutral-200 bg-opacity-60"
        onClick={handleBackdropClick}
      ></div>
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 mx-auto flex ${
          fullHeight ? "h-full" : "max-h-[80vh] rounded-t-3xl"
        } w-full max-w-[500px] animate-drawer flex-col overflow-auto bg-white shadow-lg`}
        {...rest}
      >
        <span className="mx-auto my-0 flex h-2 w-[100px] rounded-[0px_0px_200px_200px] bg-primary"></span>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
