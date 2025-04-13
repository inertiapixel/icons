import React from "react";

export const DoorOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75198)">
<path d="M3 21H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 21V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.17969 3.175C7.42969 3.063 7.70769 3 7.99969 3H15.9997C16.5301 3 17.0388 3.21071 17.4139 3.58579C17.789 3.96086 17.9997 4.46957 17.9997 5V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 18V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75198">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
