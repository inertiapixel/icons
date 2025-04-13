import React from "react";

export const TableOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62111)">
<path d="M7 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V17M20.415 20.413C20.2295 20.5993 20.009 20.7471 19.7661 20.8478C19.5233 20.9486 19.2629 21.0003 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.45 3.223 3.95 3.583 3.588"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 10H10M14 10H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 3V6M10 10V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62111">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
