import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  width: string;
  height: string;
  type: string;
  children: React.ReactNode;
  handler?: () => void;
}

export const Button: React.FC<Props> = ({
  width,
  height,
  type,
  children,
  handler,
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      type="button"
      className={type}
      style={{ width: `${width}`, height: `${height}` }}
      onClick={handler}
    >
      {children}
    </motion.button>
  );
};
