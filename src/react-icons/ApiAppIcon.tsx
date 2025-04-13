import React from "react";

export const ApiAppIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85751)">
<path d="M12 15H5.5C4.83696 15 4.20107 14.7366 3.73223 14.2678C3.26339 13.7989 3 13.163 3 12.5C3 11.837 3.26339 11.2011 3.73223 10.7322C4.20107 10.2634 4.83696 10 5.5 10H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 12V18.5C15 19.163 14.7366 19.7989 14.2678 20.2678C13.7989 20.7366 13.163 21 12.5 21C11.837 21 11.2011 20.7366 10.7322 20.2678C10.2634 19.7989 10 19.163 10 18.5V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 9H18.5C19.163 9 19.7989 9.26339 20.2678 9.73223C20.7366 10.2011 21 10.837 21 11.5C21 12.163 20.7366 12.7989 20.2678 13.2678C19.7989 13.7366 19.163 14 18.5 14H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12V5.5C9 4.83696 9.26339 4.20107 9.73223 3.73223C10.2011 3.26339 10.837 3 11.5 3C12.163 3 12.7989 3.26339 13.2678 3.73223C13.7366 4.20107 14 4.83696 14 5.5V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85751">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
