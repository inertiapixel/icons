import React from "react";

export const LadderIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71061)">
<path d="M8 3V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 3V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 14H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 10H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 6H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 18H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71061">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
