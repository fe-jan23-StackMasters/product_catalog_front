import React from 'react';

interface Props {
  width: string,
  height: string,
  type: string,
  children: React.ReactNode,
}

export const Button: React.FC<Props> = ({
  width,
  height,
  type,
  children,
}) => {
  return (
    <button
      type="button"
      className={type}
      style={{ width: `${width}`, height: `${height}` }}
    >
      {children}
    </button>
  );
};
