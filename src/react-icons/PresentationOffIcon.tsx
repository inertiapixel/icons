import React from "react";

export const PresentationOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65813)">
<path d="M3 4H4M8 4H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H16M19.42 15.408C19.779 15.046 20 14.549 20 14V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 20H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12L10 10M14 10L16 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65813">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
