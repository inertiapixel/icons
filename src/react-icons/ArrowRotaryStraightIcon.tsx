import React from "react";

export const ArrowRotaryStraightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85119)">
<path d="M10 13C10 13.7956 10.3161 14.5587 10.8787 15.1213C11.4413 15.6839 12.2044 16 13 16C13.7956 16 14.5587 15.6839 15.1213 15.1213C15.6839 14.5587 16 13.7956 16 13C16 12.2044 15.6839 11.4413 15.1213 10.8787C14.5587 10.3161 13.7956 10 13 10C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 16V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 3V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 7L13 3L17 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85119">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
