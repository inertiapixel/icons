import React from "react";

export const LeafIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70731)">
<path d="M5 21C5.5 16.5 7.5 13 12 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.99837 18C15.2164 18 19.4984 14.712 19.9984 6V4H15.9844C6.98438 4 3.99838 8 3.98438 13C3.98438 14 3.98438 16 5.98438 18H8.98438H8.99837Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70731">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
