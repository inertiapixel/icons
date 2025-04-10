import React from "react";

export const CornerUpLeftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_77745)">
<path d="M18 18V12C18 11.2044 17.6839 10.4413 17.1213 9.87868C16.5587 9.31607 15.7956 9 15 9H5M5 9L9 5M5 9L9 13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77745">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
