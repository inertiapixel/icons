import React from "react";

export const FloatCenterIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73410)">
<path d="M9 6C9 5.73478 9.10536 5.48043 9.29289 5.29289C9.48043 5.10536 9.73478 5 10 5H14C14.2652 5 14.5196 5.10536 14.7071 5.29289C14.8946 5.48043 15 5.73478 15 6V10C15 10.2652 14.8946 10.5196 14.7071 10.7071C14.5196 10.8946 14.2652 11 14 11H10C9.73478 11 9.48043 10.8946 9.29289 10.7071C9.10536 10.5196 9 10.2652 9 10V6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 7H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 11H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 7H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 11H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 19H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73410">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
