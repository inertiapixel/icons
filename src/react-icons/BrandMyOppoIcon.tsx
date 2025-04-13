import React from "react";

export const BrandMyOppoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81900)">
<path d="M18.3157 5H5.6837L2.2657 9.019C2.0911 9.22066 1.99659 9.47939 2.00009 9.74611C2.0036 10.0128 2.10487 10.269 2.2847 10.466L11.9987 21L21.7137 10.51C21.8932 10.3137 21.9947 10.0585 21.9992 9.79255C22.0036 9.52657 21.9106 9.26816 21.7377 9.066L18.3157 5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 11L12 14L15 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81900">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
