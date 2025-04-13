import React from "react";

export const BrandDolbyDigitalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82396)">
<path d="M20.9995 6V18H20.1095C16.7695 18 14.0625 15.314 14.0625 12C14.0625 8.686 16.7695 6 20.1085 6H20.9995Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.0625 6V18H3.9535C7.2935 18 9.9995 15.314 9.9995 12C9.9995 8.686 7.2925 6 3.9535 6H3.0625Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82396">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
