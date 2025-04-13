import React from "react";

export const Zeppelin1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59445)">
<path d="M13.5 4C18.194 4 22 6.686 22 10C22 13.314 18.194 16 13.5 16C11.37 16 8.916 15.074 6.136 13.223L4 15V11.67C3.31772 11.1323 2.65079 10.5754 2 10C2.65079 9.42459 3.31772 8.8677 4 8.33V5L6.135 6.778C8.915 4.926 11.37 4 13.5 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 15.5V20H16V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59445">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
