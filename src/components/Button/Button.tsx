import React from 'react';

interface Props {
  width: string,
  height: string,
  type: string,
  children: React.ReactNode,
  handler?: () => void,
}

export const Button: React.FC<Props> = ({
  width,
  height,
  type,
  children,
  handler,
}) => {
  return (
    <button
      type="button"
      className={type}
      style={{ width: `${width}`, height: `${height}` }}
      onClick={handler}
    >
      {children}
    </button>
  );
}
