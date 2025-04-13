import React from "react";

export const SignatureOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63624)">
<path d="M3 17C6.333 13.667 8 11 8 9C8 8.606 7.983 8.265 7.95 7.967M6 6C5 6 3.968 7.085 4 9C4.034 11.048 5.658 13.877 6.5 15C8 17 9 17.5 10 16L12 13C12.333 15.667 13.333 17 15 17C15.219 17 15.708 16.659 16.231 16.258M20 16C20.303 16.245 20.64 16.677 21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63624">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
