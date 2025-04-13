import React from "react";

export const BrowserCheckIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80967)">
<path d="M4 5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 8H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 4V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 14.5L11 16L14 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80967">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
