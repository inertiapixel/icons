import React from "react";

export const BuildingFactory2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80784)">
<path d="M3 21H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 21V9L10 13V9L15 13H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 21V13L17.564 3.426C17.5463 3.30745 17.4865 3.19921 17.3957 3.12102C17.3048 3.04283 17.1889 2.99988 17.069 3H15.924C15.8055 2.99982 15.6907 3.04175 15.6003 3.11831C15.5098 3.19487 15.4494 3.30108 15.43 3.418L14 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 17H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 17H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80784">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
