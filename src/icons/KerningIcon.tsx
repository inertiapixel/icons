import React from "react";

export const KerningIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71156)">
<path d="M16 15V11.5C16 10.837 16.2634 10.2011 16.7322 9.73223C17.2011 9.26339 17.837 9 18.5 9C19.163 9 19.7989 9.26339 20.2678 9.73223C20.7366 10.2011 21 10.837 21 11.5V15M21 13H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 9L6 15L9 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 20L15 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71156">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
