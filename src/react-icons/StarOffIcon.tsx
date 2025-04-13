import React from "react";

export const StarOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62475)">
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.0128 6.01791L11.9938 2.00391L15.0798 8.25691L21.9798 9.25691L17.5588 13.5609M17.5708 17.5709L18.1588 20.9969L12.0008 17.7519L5.82881 20.9969L7.00781 14.1239L2.00781 9.25691L8.33481 8.33991"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62475">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
