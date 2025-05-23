import React from "react";

export const GardenCartIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73055)">
<path d="M15 17.5C15 18.163 15.2634 18.7989 15.7322 19.2678C16.2011 19.7366 16.837 20 17.5 20C18.163 20 18.7989 19.7366 19.2678 19.2678C19.7366 18.7989 20 18.163 20 17.5C20 16.837 19.7366 16.2011 19.2678 15.7322C18.7989 15.2634 18.163 15 17.5 15C16.837 15 16.2011 15.2634 15.7322 15.7322C15.2634 16.2011 15 16.837 15 17.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 8V19C6.00019 19.2107 6.06691 19.4159 6.19063 19.5864C6.31436 19.7569 6.48877 19.884 6.68899 19.9495C6.8892 20.015 7.105 20.0156 7.30558 19.9513C7.50617 19.8869 7.6813 19.7608 7.806 19.591L11.5 14.5V14.555"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 8H21L17.5 15L10.4 14.253C9.67571 14.1769 8.98595 13.9045 8.40511 13.4651C7.82427 13.0258 7.37439 12.4362 7.104 11.76L4.251 4.63C4.17702 4.44425 4.04906 4.28494 3.88364 4.17264C3.71822 4.06034 3.52294 4.00021 3.323 4H2"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73055">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
