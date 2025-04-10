import React from "react";

export const PepperIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_66745)">
<path d="M13 11C13 13.21 10.761 15 8 15C5.239 15 3 13.21 3 11C3 13.1217 3.84285 15.1566 5.34315 16.6569C6.84344 18.1571 8.87827 19 11 19C13.1217 19 15.1566 18.1571 16.6569 16.6569C18.1571 15.1566 19 13.1217 19 11C19 10.2044 18.6839 9.44129 18.1213 8.87868C17.5587 8.31607 16.7956 8 16 8C15.2044 8 14.4413 8.31607 13.8787 8.87868C13.3161 9.44129 13 10.2044 13 11Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 8C16 6 18 4 20 4" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66745">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
