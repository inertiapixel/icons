import React from "react";

export const ElevatorIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74880)">
<path d="M5 5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4H18C18.2652 4 18.5196 4.10536 18.7071 4.29289C18.8946 4.48043 19 4.73478 19 5V19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 10L12 8L14 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 14L12 16L14 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74880">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
