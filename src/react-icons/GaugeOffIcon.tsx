import React from "react";

export const GaugeOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73033)">
<path d="M20.039 16.0522C20.892 14.3626 21.1906 12.4472 20.8924 10.5781C20.5942 8.70909 19.7143 6.98163 18.378 5.64136C17.0416 4.3011 15.3167 3.41626 13.4485 3.11265C11.5803 2.80904 9.66399 3.10212 7.97196 3.95021M5.63896 5.63621C4.80336 6.47208 4.14058 7.46434 3.68845 8.55635C3.23633 9.64836 3.00372 10.8187 3.00391 12.0006C3.00409 13.1825 3.23707 14.3528 3.68954 15.4447C4.142 16.5366 4.8051 17.5286 5.64096 18.3642C6.47683 19.1998 7.46909 19.8626 8.5611 20.3147C9.6531 20.7668 10.8235 20.9995 12.0054 20.9993C13.1873 20.9991 14.3576 20.7661 15.4494 20.3136C16.5413 19.8612 17.5334 19.1981 18.369 18.3622"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.2829 11.3047C11.0959 11.4929 10.9913 11.7476 10.9922 12.0129C10.993 12.2781 11.0992 12.5322 11.2874 12.7192C11.4756 12.9062 11.7303 13.0107 11.9956 13.0099C12.2608 13.009 12.5149 12.9029 12.7019 12.7147"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 10L16 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12C7 10.614 7.564 9.36 8.475 8.454M11.094 7.082C11.388 7.028 11.691 7 12 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73033">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
