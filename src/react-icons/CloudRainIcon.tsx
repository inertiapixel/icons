import React from "react";

export const CloudRainIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78277)">
<path d="M7.00142 17.9992C5.7537 17.9992 4.55708 17.5251 3.6748 16.6812C2.79253 15.8373 2.29687 14.6927 2.29688 13.4992C2.29687 12.3057 2.79253 11.1612 3.6748 10.3172C4.55708 9.47333 5.7537 8.99922 7.00142 8.99922C7.29611 7.6864 8.15818 6.5327 9.39801 5.79193C10.0119 5.42514 10.7001 5.17077 11.4232 5.04333C12.1463 4.9159 12.8903 4.9179 13.6125 5.04922C14.3348 5.18054 15.0213 5.43861 15.6327 5.8087C16.2442 6.17878 16.7686 6.65364 17.1762 7.20615C17.5837 7.75866 17.8664 8.378 18.008 9.02882C18.1496 9.67963 18.1473 10.3492 18.0014 10.9992H19.0014C19.9297 10.9992 20.8199 11.368 21.4763 12.0243C22.1327 12.6807 22.5014 13.571 22.5014 14.4992C22.5014 15.4275 22.1327 16.3177 21.4763 16.9741C20.8199 17.6305 19.9297 17.9992 19.0014 17.9992"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 13V15M11 18V20M15 15V17M15 20V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78277">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
