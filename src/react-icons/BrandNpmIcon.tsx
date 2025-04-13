import React from "react";

export const BrandNpmIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81835)">
<path d="M1 8H23V15H11V17H7V15H1V8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 8V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 8V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 11V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 11V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 11V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 11V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81835">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
