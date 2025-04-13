import React from "react";

export const DatabaseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_76915)">
<path d="M4 6C4 6.79565 4.84285 7.55871 6.34315 8.12132C7.84344 8.68393 9.87827 9 12 9C14.1217 9 16.1566 8.68393 17.6569 8.12132C19.1571 7.55871 20 6.79565 20 6C20 5.20435 19.1571 4.44129 17.6569 3.87868C16.1566 3.31607 14.1217 3 12 3C9.87827 3 7.84344 3.31607 6.34315 3.87868C4.84285 4.44129 4 5.20435 4 6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6V12C4 12.7956 4.84285 13.5587 6.34315 14.1213C7.84344 14.6839 9.87827 15 12 15C14.1217 15 16.1566 14.6839 17.6569 14.1213C19.1571 13.5587 20 12.7956 20 12V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12V18C4 18.7956 4.84285 19.5587 6.34315 20.1213C7.84344 20.6839 9.87827 21 12 21C14.1217 21 16.1566 20.6839 17.6569 20.1213C19.1571 19.5587 20 18.7956 20 18V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_76915">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
