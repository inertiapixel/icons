import React from "react";

export const BracesOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82948)">
<path d="M5.176 5.17578C5.063 5.42678 5 5.70578 5 5.99878V8.99878C5 10.6558 4.105 11.9988 3 11.9988C4.105 11.9988 5 13.3418 5 14.9988V17.9988C5 18.5292 5.21071 19.0379 5.58579 19.413C5.96086 19.7881 6.46957 19.9988 7 19.9988"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 4C17.5304 4 18.0391 4.21071 18.4142 4.58579C18.7893 4.96086 19 5.46957 19 6V9C19 10.657 19.895 12 21 12C19.895 12 19 13.343 19 15M18.824 18.821C18.6658 19.1723 18.4096 19.4705 18.086 19.6797C17.7624 19.8888 17.3853 20.0001 17 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82948">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
