import React from "react";

export const SortDescendingSmallBigIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63326)">
<path d="M10 15L7 18L4 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 6V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 18.333C14 18.702 14.298 19 14.667 19H17.333C17.5099 19 17.6796 18.9297 17.8046 18.8046C17.9297 18.6796 18 18.5099 18 18.333V15.667C18 15.4901 17.9297 15.3204 17.8046 15.1954C17.6796 15.0703 17.5099 15 17.333 15H14.667C14.4901 15 14.3204 15.0703 14.1954 15.1954C14.0703 15.3204 14 15.4901 14 15.667V18.333Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 10.833C14 11.478 14.522 12 15.167 12H19.833C20.478 12 21 11.478 21 10.833V6.167C21 5.522 20.478 5 19.833 5H15.167C14.522 5 14 5.522 14 6.167V10.833Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63326">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
