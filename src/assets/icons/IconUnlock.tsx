import React, { ReactElement } from 'react';

interface Props {
  color: string,
}

const IconUnlock: React.FC<Props> = ({ color }: Props): ReactElement => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock-open" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <circle cx="12" cy="16" r="1" />
    <path d="M8 11v-5a4 4 0 0 1 8 0" />
  </svg>
);

export default IconUnlock;
