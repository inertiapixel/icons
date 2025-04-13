import React from "react";

export const LetterJIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70614)">
<path d="M17 4V16C17 17.0609 16.5786 18.0783 15.8284 18.8284C15.0783 19.5786 14.0609 20 13 20H11C9.93913 20 8.92172 19.5786 8.17157 18.8284C7.42143 18.0783 7 17.0609 7 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70614">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
