import React from "react";

export const CurrencyRupeeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77165)">
<path d="M18 5H7H10C11.0609 5 12.0783 5.42143 12.8284 6.17157C13.5786 6.92172 14 7.93913 14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13H7L13 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 9H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77165">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
