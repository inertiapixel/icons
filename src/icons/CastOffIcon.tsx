import React from "react";

export const CastOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79913)">
<path d="M3 19H3.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 19C7 17.9391 6.57857 16.9217 5.82843 16.1716C5.07828 15.4214 4.06087 15 3 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 19C11 16.8783 10.1571 14.8434 8.65685 13.3431C7.15656 11.8429 5.12173 11 3 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.0001 19.0019H18.0001C18.2966 19.002 18.5915 18.9582 18.8751 18.8719M20.8751 16.8719C20.9601 16.5904 21.0032 16.2979 21.0031 16.0039V8.00391C21.0031 7.20826 20.6871 6.4452 20.1244 5.88259C19.5618 5.31998 18.7988 5.00391 18.0031 5.00391H9.00313M5.13812 5.13991C4.6929 5.27881 4.28619 5.51961 3.95029 5.84318C3.61439 6.16675 3.35857 6.56418 3.20312 7.00391"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79913">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
