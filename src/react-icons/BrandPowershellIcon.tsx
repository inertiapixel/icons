import React from "react";

export const BrandPowershellIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81712)">
<path d="M4.88689 20H16.7549C17.6479 20 18.4189 19.335 18.6019 18.408L20.9599 6.408C21.1719 5.327 20.5179 4.268 19.4979 4.042C19.3715 4.01407 19.2424 3.99999 19.1129 4H7.24489C6.35189 4 5.58089 4.665 5.39789 5.592L3.03989 17.592C2.82789 18.673 3.48189 19.732 4.50189 19.958C4.62889 19.986 4.75789 20 4.88689 20Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 8L13 12L7 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81712">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
