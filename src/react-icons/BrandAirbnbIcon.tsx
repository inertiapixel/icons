import React from "react";

export const BrandAirbnbIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82867)">
<path d="M12 18.5C10.494 16.535 9 14.5 9 13C9 11 10 10 12 10C14 10 15 11 15 13C15 14.5 13.506 16.535 12 18.5ZM12 18.5C13 19.5 13.5 20 14.5 20.5C15.5 21 17 21.5 19 20C21 18.5 20.5 16.5 19.5 14C18.5 11.5 17.167 8.5 14.5 4.5C13.666 3.5 13 3 11.997 3C10.997 3 10.374 3.45 9.5 4.5C6.833 8.5 5.5 11.5 4.5 14C3.5 16.5 3 18.5 5 20C7 21.5 8.5 21 9.5 20.5C10.5 20 11 19.5 12 18.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82867">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
