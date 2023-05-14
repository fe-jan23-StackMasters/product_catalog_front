import { ReactNode, FC } from 'react';

type Props = {
  children: ReactNode;
};

export const Container: FC<Props> = ({ children, ...props }) => {
  return (
    <div
      className="container"
      {...props}
    >
      {children}
    </div>
  );
};
