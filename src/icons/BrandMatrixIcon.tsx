import React from "react";

export const BrandMatrixIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_81960)">
<path d="M4 3H3V21H4" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 21H21V3H20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 9V15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15V11.5C12 10.837 11.7366 10.2011 11.2678 9.73223C10.7989 9.26339 10.163 9 9.5 9C8.83696 9 8.20107 9.26339 7.73223 9.73223C7.26339 10.2011 7 10.837 7 11.5V12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 15V11.5C17 10.837 16.7366 10.2011 16.2678 9.73223C15.7989 9.26339 15.163 9 14.5 9C13.837 9 13.2011 9.26339 12.7322 9.73223C12.2634 10.2011 12 10.837 12 11.5V12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81960">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
