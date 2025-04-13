import React from "react";

export const BrandBumbleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82656)">
<path d="M7 12H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 8H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.2679 3H7.73189C7.47322 3.00117 7.21951 3.07105 6.99671 3.20248C6.77392 3.33391 6.59004 3.52217 6.46389 3.748L2.19589 11.257C2.06749 11.4836 2 11.7396 2 12C2 12.2604 2.06749 12.5164 2.19589 12.743L6.46389 20.252C6.72389 20.714 7.20789 20.999 7.73189 21H16.2679C16.5266 20.9988 16.7803 20.9289 17.0031 20.7975C17.2259 20.6661 17.4097 20.4778 17.5359 20.252L21.8039 12.743C21.9323 12.5164 21.9998 12.2604 21.9998 12C21.9998 11.7396 21.9323 11.4836 21.8039 11.257L17.5359 3.748C17.4097 3.52217 17.2259 3.33391 17.0031 3.20248C16.7803 3.07105 16.5266 3.00117 16.2679 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82656">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
