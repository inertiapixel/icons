import React from "react";

export const CornerLeftDownIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_77773)">
<path d="M18 6H12C11.2044 6 10.4413 6.31607 9.87868 6.87868C9.31607 7.44129 9 8.20435 9 9V19M9 19L5 15M9 19L13 15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77773">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
