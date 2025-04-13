import React from "react";

export const BrandTedIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81387)">
<path d="M2 8H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 8V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 8H9V16H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12H11.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 8V16H18C18.7956 16 19.5587 15.6839 20.1213 15.1213C20.6839 14.5587 21 13.7956 21 13V11C21 10.2044 20.6839 9.44129 20.1213 8.87868C19.5587 8.31607 18.7956 8 18 8H16Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81387">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
