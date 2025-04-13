import React from "react";

export const BarcodeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84291)">
<path d="M4 7V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 17V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 11H6V13H5V11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 11V13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 11H15V13H14V11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 11V13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84291">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
