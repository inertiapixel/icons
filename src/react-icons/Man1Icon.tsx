import React from "react";

export const Man1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69622)">
<path d="M10 16V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 16V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 9H15L14 16H10L9 9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 11C6.333 9.667 7.667 9 9 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 11C17.667 9.667 16.333 9 15 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 4C10 4.53043 10.2107 5.03914 10.5858 5.41421C10.9609 5.78929 11.4696 6 12 6C12.5304 6 13.0391 5.78929 13.4142 5.41421C13.7893 5.03914 14 4.53043 14 4C14 3.46957 13.7893 2.96086 13.4142 2.58579C13.0391 2.21071 12.5304 2 12 2C11.4696 2 10.9609 2.21071 10.5858 2.58579C10.2107 2.96086 10 3.46957 10 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69622">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
