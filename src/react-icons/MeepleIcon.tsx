import React from "react";

export const MeepleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68977)">
<path d="M9 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19C3 17 6.378 14.093 7 13C6 13 3 12.5 3 11C3 9 7 7.5 9 7C9 5.5 9.5 3 12 3C14.5 3 15 5.5 15 7C17 7.5 21 9 21 11C21 12.5 18 13 17 13C17.622 14.093 21 17 21 19C21 19.2652 20.8946 19.5196 20.7071 19.7071C20.5196 19.8946 20.2652 20 20 20H15C14 20 13 16 12 16C11 16 10 20 9 20Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68977">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
