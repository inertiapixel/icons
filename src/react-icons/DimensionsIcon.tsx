import React from "react";

export const DimensionsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75363)">
<path d="M3 5H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7L14 5L12 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 3L3 5L5 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 10V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 19L19 21L21 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 12L19 10L17 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12C3 11.4696 3.21071 10.9609 3.58579 10.5858C3.96086 10.2107 4.46957 10 5 10H12C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12V19C14 19.5304 13.7893 20.0391 13.4142 20.4142C13.0391 20.7893 12.5304 21 12 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75363">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
