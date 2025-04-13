import React from "react";

export const GasStationOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73047)">
<path d="M15 11C15.5304 11 16.0391 11.2107 16.4142 11.5858C16.7893 11.9609 17 12.4696 17 13M20 16V9L17 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 20V6C4 5.452 4.22 4.956 4.577 4.595M8 4H12C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V10M14 14V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 20H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 7V8C18 8.26522 18.1054 8.51957 18.2929 8.70711C18.4804 8.89464 18.7348 9 19 9H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 11H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73047">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
