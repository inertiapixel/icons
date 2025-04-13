import React from "react";

export const CannabisIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80133)">
<path d="M7 20C7 20 7 18 8 16.5C6.5 16.5 6 16 4 15C4 15 5.839 13.62 9 14C7.211 13.03 5.721 11.97 4 8C4 8 7.98 7.7 10.5 11.5C8.216 6.6 12 2 12 2C14.734 7.47 14.389 9.5 13.5 11.5C16.031 7.73 20 8 20 8C18.279 11.97 16.789 13.03 15 14C18.161 13.62 20 15 20 15C18 16 17.5 16.5 16 16.5C17 18 17 20 17 20C15 20 12.562 17.78 12 17C11.437 17.78 9 20 7 20Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80133">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
