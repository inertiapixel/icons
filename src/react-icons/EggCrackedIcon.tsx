import React from "react";

export const EggCrackedIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74907)">
<path d="M19 14.083C19 18.237 16.034 20.823 12 21C7.8 21 5 18.237 5 14.083C5 8.54501 8.5 2.99301 12 3.00001C15.5 3.00701 19 8.54501 19 14.083Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3L10.5 8L14 10.5L12 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74907">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
