import React from "react";

export const BrandFinderIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82311)">
<path d="M3 5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5V19C21 19.2652 20.8946 19.5196 20.7071 19.7071C20.5196 19.8946 20.2652 20 20 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 8V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 8V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 4C11.846 5.486 11.24 7.443 11 13H13.5C13.31 15.867 13.594 18.024 14 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 15.5C10.667 17.5 13.333 17.5 17 15.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82311">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
