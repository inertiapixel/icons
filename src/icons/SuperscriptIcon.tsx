import React from "react";

export const SuperscriptIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62245)">
<path d="M5 7L13 17M5 17L13 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 10.9999H17L20.5 6.99994C20.6313 6.77013 20.7161 6.5167 20.7495 6.25413C20.7829 5.99155 20.7642 5.72498 20.6945 5.46961C20.6249 5.21425 20.5056 4.97511 20.3436 4.76584C20.1815 4.55657 19.9798 4.38127 19.75 4.24994C19.2859 3.98473 18.7354 3.91475 18.2197 4.0554C17.7039 4.19605 17.2652 4.53582 17 4.99994"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62245">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
