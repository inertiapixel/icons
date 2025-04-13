import React from "react";

export const PizzaOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66297)">
<path d="M10.313 6.277L12 3L17.34 13.376M19.817 19.839C17.3577 20.9379 14.6937 21.5039 12 21.5C8.96 21.5 6.048 20.786 3.5 19.517L8.934 8.958"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.37891 15.8672C7.48889 16.9445 9.82482 17.5046 12.1939 17.5012C13.7539 17.5012 15.2989 17.2612 16.7759 16.7882"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 13.9983V13.9883"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66297">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
