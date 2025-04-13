import React from "react";

export const BrandDenodoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82453)">
<path d="M11 11H13V13H11V11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.63281 15.6328L5.36481 14.6328L6.36481 16.3648L4.63281 17.3648L3.63281 15.6328Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 19H13V21H11V19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.6328 14.6328L20.3648 15.6328L19.3648 17.3648L17.6328 16.3648L18.6328 14.6328Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.6328 7.63281L19.3648 6.63281L20.3648 8.36481L18.6328 9.36481L17.6328 7.63281Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 3H13V5H11V3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.63281 8.36481L4.63281 6.63281L6.36481 7.63281L5.36481 9.36481L3.63281 8.36481Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82453">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
