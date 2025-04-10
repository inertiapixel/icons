import React from "react";

export const PilcrowLeftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_66363)">
<path d="M11 9H9C8.20435 9 7.44129 8.68393 6.87868 8.12132C6.31607 7.55871 6 6.79565 6 6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3H16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 3V14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 3V14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 18H21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 15L3 18L6 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66363">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
