import React from "react";

export const LetterQIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70566)">
<path d="M18 9C18 7.67392 17.4732 6.40215 16.5355 5.46447C15.5979 4.52678 14.3261 4 13 4H11C9.67392 4 8.40215 4.52678 7.46447 5.46447C6.52678 6.40215 6 7.67392 6 9V15C6 16.3261 6.52678 17.5979 7.46447 18.5355C8.40215 19.4732 9.67392 20 11 20H13C14.3261 20 15.5979 19.4732 16.5355 18.5355C17.4732 17.5979 18 16.3261 18 15V9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 15L18 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70566">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
