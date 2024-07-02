import React, { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className='alert alert-primary alert-dismissible'>
      {children}
      <button
        type='button'
        className='btn-close'
        data-bs-dismiss='alert'
        aria-lable='Close'
        onClick={onClose}></button>
    </div>
  );
};

export default Alert;
