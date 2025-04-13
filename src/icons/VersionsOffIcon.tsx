import React from "react";

export const VersionsOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60374)">
<path d="M10.184 6.162C10.3441 5.81508 10.6002 5.52128 10.922 5.31536C11.2439 5.10943 11.6179 4.99999 12 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V16M18.815 18.827C18.5586 18.9414 18.2808 19.0004 18 19H12C11.4696 19 10.9609 18.7893 10.5858 18.4142C10.2107 18.0391 10 17.5304 10 17V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 7V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 8V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60374">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
