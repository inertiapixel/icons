import React from "react";

export const HexagonsOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71859)">
<path d="M4 18V13L8 11L12 13V18L8 20L4 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 11V8M9.332 5.334L12 4L16 6V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12.999L12.661 12.668"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.345 11.328L16 11L20 13V16M18.666 18.667L16 20L12 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71859">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
