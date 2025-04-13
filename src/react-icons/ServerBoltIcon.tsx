import React from "react";

export const ServerBoltIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64320)">
<path d="M3 7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4H18C18.7956 4 19.5587 4.31607 20.1213 4.87868C20.6839 5.44129 21 6.20435 21 7V9C21 9.79565 20.6839 10.5587 20.1213 11.1213C19.5587 11.6839 18.7956 12 18 12H6C5.20435 12 4.44129 11.6839 3.87868 11.1213C3.31607 10.5587 3 9.79565 3 9V7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.31607 18.5587 3 17.7956 3 17V15C3 14.2044 3.31607 13.4413 3.87868 12.8787C4.44129 12.3161 5.20435 12 6 12H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 8V8.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 16V16.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 15L18 18H21L19 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64320">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
