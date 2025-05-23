import React from "react";

export const PodiumOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66040)">
<path d="M12 8H19L18.379 10.485C18.2708 10.9177 18.0212 11.3018 17.6697 11.5763C17.3182 11.8508 16.885 11.9999 16.439 12H16M12 12H7.561C7.11501 11.9999 6.68184 11.8508 6.33033 11.5763C5.97882 11.3018 5.72915 10.9177 5.621 10.485L5 8H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 8V7M7.864 3.894C8.14271 3.61046 8.47518 3.38534 8.84194 3.23184C9.20871 3.07833 9.60241 2.99952 10 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12L9 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.599 15.6133L15 21.0003"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 21H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66040">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
