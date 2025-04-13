import React from "react";

export const HelicopterIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72163)">
<path d="M3 10L4 12H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 9C11.4696 9 10.9609 9.21071 10.5858 9.58579C10.2107 9.96086 10 10.4696 10 11V14C10 15.1 10.9 16 12 16H19C19.5304 16 20.0391 15.7893 20.4142 15.4142C20.7893 15.0391 21 14.5304 21 14C21 10.69 17.87 9 14 9H12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 9V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 6H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 9.10156V13.0016H20.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 19V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 19H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72163">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
