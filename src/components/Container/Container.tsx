import { ReactNode } from 'react';
import './Container.scss';

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};
