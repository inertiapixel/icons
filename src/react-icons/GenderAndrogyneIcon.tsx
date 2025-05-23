import React from "react";

export const GenderAndrogyneIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73010)">
<path d="M13 11L19 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15C4 16.3261 4.52678 17.5979 5.46447 18.5355C6.40215 19.4732 7.67392 20 9 20C10.3261 20 11.5979 19.4732 12.5355 18.5355C13.4732 17.5979 14 16.3261 14 15C14 13.6739 13.4732 12.4021 12.5355 11.4645C11.5979 10.5268 10.3261 10 9 10C7.67392 10 6.40215 10.5268 5.46447 11.4645C4.52678 12.4021 4 13.6739 4 15Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 9V5H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 10.5L13.5 7.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73010">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
