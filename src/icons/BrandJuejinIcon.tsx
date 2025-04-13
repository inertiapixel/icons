import React from "react";

export const BrandJuejinIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82067)">
<path d="M2 12L12 19.422L22 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 9L12 13L17 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 5.99922L12 6.79922L13 5.99922L12 5.19922L11 5.99922Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82067">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
