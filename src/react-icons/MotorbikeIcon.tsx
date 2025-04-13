import React from "react";

export const MotorbikeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67960)">
<path d="M2 16C2 16.7956 2.31607 17.5587 2.87868 18.1213C3.44129 18.6839 4.20435 19 5 19C5.79565 19 6.55871 18.6839 7.12132 18.1213C7.68393 17.5587 8 16.7956 8 16C8 15.2044 7.68393 14.4413 7.12132 13.8787C6.55871 13.3161 5.79565 13 5 13C4.20435 13 3.44129 13.3161 2.87868 13.8787C2.31607 14.4413 2 15.2044 2 16Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 16C16 16.7956 16.3161 17.5587 16.8787 18.1213C17.4413 18.6839 18.2044 19 19 19C19.7956 19 20.5587 18.6839 21.1213 18.1213C21.6839 17.5587 22 16.7956 22 16C22 15.2044 21.6839 14.4413 21.1213 13.8787C20.5587 13.3161 19.7956 13 19 13C18.2044 13 17.4413 13.3161 16.8787 13.8787C16.3161 14.4413 16 15.2044 16 16Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10H16.5L12.5 14H7.5L11.5 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 6H15L16.5 9L18.5 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67960">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
