import React from "react";

export const SortDescendingLettersIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63345)">
<path d="M15 21V16C15 14.62 15.62 14 17 14C18.38 14 19 14.62 19 16V21M19 18H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 10H15L19 3H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15L7 18L10 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 6V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63345">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
