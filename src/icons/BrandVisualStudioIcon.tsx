import React from "react";

export const BrandVisualStudioIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_81257)">
<path d="M4 8L6 7L16 20L20 18V6L16 4L6 17L4 16V8Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81257">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
