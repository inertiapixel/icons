import React from "react";

export const LeafOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70735)">
<path d="M5 20.9994C5.475 16.7294 7.3 13.3594 11.331 11.3164"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.61637 6.623C4.74238 8.248 3.99138 10.5 3.98438 13C3.98438 14 3.98438 16 5.98438 18H8.99837C11.7314 18 14.0904 17.365 15.9184 15.913M17.8174 13.814C19.0414 11.942 19.8044 9.38 19.9984 6V4H15.9844C13.1214 4 10.8664 4.405 9.12337 5.118"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70735">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
