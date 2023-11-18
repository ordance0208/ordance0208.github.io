import React from 'react';

const IconButton = ({ children, onClick, className }: any) => {
  return (
    <div
      className='p-2 hover:bg-[#3333334d] hover:cursor-pointer rounded-full'
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default IconButton;
