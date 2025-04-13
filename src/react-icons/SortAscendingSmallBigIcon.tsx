import React from "react";

export const SortAscendingSmallBigIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63364)">
<path d="M4 15L7 18L10 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 6V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 5.667C14 5.298 14.298 5 14.667 5H17.333C17.702 5 18 5.298 18 5.667V8.333C18 8.5099 17.9297 8.67955 17.8046 8.80464C17.6796 8.92973 17.5099 9 17.333 9H14.667C14.4901 9 14.3204 8.92973 14.1954 8.80464C14.0703 8.67955 14 8.5099 14 8.333V5.667Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 13.167C14 12.522 14.522 12 15.167 12H19.833C20.478 12 21 12.522 21 13.167V17.833C21 18.478 20.478 19 19.833 19H15.167C15.0137 19 14.862 18.9698 14.7204 18.9112C14.5788 18.8525 14.4502 18.7666 14.3418 18.6582C14.2334 18.5498 14.1475 18.4212 14.0888 18.2796C14.0302 18.138 14 17.9863 14 17.833V13.167Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63364">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
