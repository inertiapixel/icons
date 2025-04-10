import React from "react";

export const BrandFramerIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_82268)">
<path d="M6 15H18L6 3H18V9H6V15ZM6 15L12 21V15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82268">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
