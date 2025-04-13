import React from "react";

export const KarateIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71169)">
<path d="M17 4C17 4.26522 17.1054 4.51957 17.2929 4.70711C17.4804 4.89464 17.7348 5 18 5C18.2652 5 18.5196 4.89464 18.7071 4.70711C18.8946 4.51957 19 4.26522 19 4C19 3.73478 18.8946 3.48043 18.7071 3.29289C18.5196 3.10536 18.2652 3 18 3C17.7348 3 17.4804 3.10536 17.2929 3.29289C17.1054 3.48043 17 3.73478 17 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 9L7.5 10L10.5 12.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 21V13L16 7.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 4.5L12 6.5L16 7.5L20 11L18 14.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71169">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
