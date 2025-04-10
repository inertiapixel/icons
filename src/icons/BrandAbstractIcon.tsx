import React from "react";

export const BrandAbstractIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_82877)">
<path d="M12 3C19.2 3 21 4.8 21 12C21 19.2 19.2 21 12 21C4.8 21 3 19.2 3 12C3 4.8 4.8 3 12 3Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 13.5C8 14.163 8.26339 14.7989 8.73223 15.2678C9.20107 15.7366 9.83696 16 10.5 16C11.163 16 11.7989 15.7366 12.2678 15.2678C12.7366 14.7989 13 14.163 13 13.5C13 12.837 12.7366 12.2011 12.2678 11.7322C11.7989 11.2634 11.163 11 10.5 11C9.83696 11 9.20107 11.2634 8.73223 11.7322C8.26339 12.2011 8 12.837 8 13.5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 8H16V16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82877">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
