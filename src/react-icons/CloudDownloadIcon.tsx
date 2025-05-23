import React from "react";

export const CloudDownloadIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78339)">
<path d="M18.9995 17.9992C19.9278 17.9992 20.818 17.6305 21.4744 16.9741C22.1308 16.3177 22.4995 15.4275 22.4995 14.4992C22.4995 13.571 22.1308 12.6807 21.4744 12.0243C20.818 11.368 19.9278 10.9992 18.9995 10.9992H17.9995C18.1454 10.3492 18.1476 9.67963 18.006 9.02882C17.8644 8.378 17.5818 7.75866 17.1743 7.20615C16.7667 6.65364 16.2422 6.17878 15.6308 5.8087C15.0193 5.43861 14.3329 5.18054 13.6106 5.04922C12.8883 4.9179 12.1444 4.9159 11.4213 5.04333C10.6981 5.17077 10.01 5.42514 9.39609 5.79193C8.15626 6.5327 7.29419 7.6864 6.9995 8.99922C5.93345 8.95652 4.88504 9.26962 4.03377 9.88492C3.1825 10.5002 2.58132 11.3794 2.33317 12.372C2.08502 13.3646 2.20533 14.4089 2.6735 15.326C3.14167 16.2431 3.92858 16.976 4.8995 17.3992"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 19L12 22L15 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78339">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
