import React from "react";

export const BrandZulipIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81061)">
<path d="M6.5 3H17.5C18.825 3 20 4 20 5.5C20 7.5 18.295 8.764 18 9L13.5 13L15.5 8H6.5C5.83696 8 5.20107 7.73661 4.73223 7.26777C4.26339 6.79893 4 6.16304 4 5.5C4 4.83696 4.26339 4.20107 4.73223 3.73223C5.20107 3.26339 5.83696 3 6.5 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 21H6.5C5.175 21 4 20 4 18.5C4 16.5 5.705 15.236 6 15L10.5 11L8.5 16H17.5C18.163 16 18.7989 16.2634 19.2678 16.7322C19.7366 17.2011 20 17.837 20 18.5C20 19.163 19.7366 19.7989 19.2678 20.2678C18.7989 20.7366 18.163 21 17.5 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81061">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
