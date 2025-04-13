import React from "react";

export const Boom1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83491)">
<path d="M3 9.662C5 12 5 14 3 16C6 16.5 7.5 17 8 20C10 17 14 16 17 20C17 17 18 16 21 15.996C19 13.9993 19 12.0007 21 10C18 10 16 8 16 5C14 9 11 8 8.5 4C8 7 6 9 3 9.662Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83491">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
