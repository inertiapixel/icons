import React from "react";

export const ZodiacSagittariusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59393)">
<path d="M4 20L20 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 4H20V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 12.5L11.5 17.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59393">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
