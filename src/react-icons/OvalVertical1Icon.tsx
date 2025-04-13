import React from "react";

export const OvalVertical1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67203)">
<path d="M3 12C3 8.686 7.03 6 12 6C16.97 6 21 8.686 21 12C21 15.314 16.97 18 12 18C7.03 18 3 15.314 3 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67203">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
