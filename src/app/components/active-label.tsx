import React from 'react';
import css from './active-label.module.css';
export interface ActiveLabelProps {
  children: React.ReactNode;
}
console.log(css);
function ActiveLabel({ children }: ActiveLabelProps) {
  return <span className={css.label}>{children}</span>;
}

export default ActiveLabel;
