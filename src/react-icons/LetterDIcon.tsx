import React from "react";

export const LetterDIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70658)">
<path d="M7 4H13C14.3261 4 15.5979 4.52678 16.5355 5.46447C17.4732 6.40215 18 7.67392 18 9V15C18 16.3261 17.4732 17.5979 16.5355 18.5355C15.5979 19.4732 14.3261 20 13 20H7V4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70658">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
