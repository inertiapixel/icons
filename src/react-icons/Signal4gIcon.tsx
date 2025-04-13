import React from "react";

export const Signal4gIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63662)">
<path d="M6 8V11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 8H15C14.4696 8 13.9609 8.21071 13.5858 8.58579C13.2107 8.96086 13 9.46957 13 10V14C13 14.5304 13.2107 15.0391 13.5858 15.4142C13.9609 15.7893 14.4696 16 15 16H17V12H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63662">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
