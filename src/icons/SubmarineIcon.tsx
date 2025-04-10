import React from "react";

export const SubmarineIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_62356)">
<path d="M3 11V17H5L6 15.5L9 17H19C19.7956 17 20.5587 16.6839 21.1213 16.1213C21.6839 15.5587 22 14.7956 22 14C22 13.2044 21.6839 12.4413 21.1213 11.8787C20.5587 11.3161 19.7956 11 19 11H9L6 12.5L5 11H3Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 11L16 8H11L10 11" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 8V6C13 5.73478 13.1054 5.48043 13.2929 5.29289C13.4804 5.10536 13.7348 5 14 5H15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62356">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
