import React from "react";

export const RegexIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_65302)">
<path d="M6.5 15C7.16304 15 7.79893 15.2634 8.26777 15.7322C8.73661 16.2011 9 16.837 9 17.5C9 18.163 8.73661 18.7989 8.26777 19.2678C7.79893 19.7366 7.16304 20 6.5 20C5.83696 20 5.20107 19.7366 4.73223 19.2678C4.26339 18.7989 4 18.163 4 17.5C4 16.837 4.26339 16.2011 4.73223 15.7322C5.20107 15.2634 5.83696 15 6.5 15Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 7.8745L20 6.1875" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 7.875V11.25" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 7.8745L14 6.1875" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 7.875L20 9.563" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 4.5V7.875" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 7.875L14 9.563" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65302">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
