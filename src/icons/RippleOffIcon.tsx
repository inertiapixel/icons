import React from "react";

export const RippleOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65069)">
<path d="M3 6.99856C3.915 6.38856 4.83 5.96456 5.746 5.72656M9.958 5.94656C10.638 6.19356 11.319 6.54456 12 6.99856C15 8.99856 18 8.99856 21 6.99856"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 17C6 15 9 15 12 17C14.092 18.395 16.184 18.817 18.276 18.266"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12C6 10 9 10 12 12M17.482 13.429C18.655 13.258 19.827 12.782 21 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65069">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
