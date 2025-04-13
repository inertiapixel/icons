import React from "react";

export const EggOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74898)">
<path d="M17.927 17.9348C16.716 19.7928 14.576 20.8878 12 21.0008C7.8 21.0008 5 18.2378 5 14.0838C5 11.5158 5.753 8.94378 6.91 6.92578"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.64062 4.628C9.67463 3.608 10.8366 2.998 11.9986 3C15.4986 3.007 18.9986 8.545 18.9986 14.083C18.9986 14.381 18.9836 14.67 18.9536 14.951"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74898">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
