import React from "react";

export const Hexagon3dIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72085)">
<path d="M19.001 6.84445C19.3075 7.02221 19.5615 7.27795 19.7371 7.58568C19.9128 7.8934 20.0038 8.24214 20.001 8.59645V15.1514C20.001 15.8794 19.607 16.5504 18.971 16.9044L12.971 20.7484C12.674 20.9134 12.3398 21 12 21C11.6602 21 11.326 20.9134 11.029 20.7484L5.029 16.9044C4.7171 16.7304 4.4573 16.4763 4.27641 16.1683C4.09552 15.8603 4.0001 15.5096 4 15.1524V8.59645C4 7.86745 4.394 7.19645 5.029 6.84345L11.029 3.26045C11.3346 3.08966 11.6789 3 12.029 3C12.3791 3 12.7234 3.08966 13.029 3.26045L19.029 6.84445H18.999H19.001Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16.5V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 7.5L8 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 10L20 7.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7.5V12L8 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12L16 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16.5L16 14V10L12 7.5L8 10V14L12 16.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72085">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
