import React from "react";

export const ParenthesesIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67067)">
<path d="M7.00036 4C5.08243 6.22408 4.02734 9.06317 4.02734 12C4.02734 14.9368 5.08243 17.7759 7.00036 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 4C18.9179 6.22408 19.973 9.06317 19.973 12C19.973 14.9368 18.9179 17.7759 17 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67067">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
