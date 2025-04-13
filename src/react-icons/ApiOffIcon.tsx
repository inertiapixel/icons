import React from "react";

export const ApiOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85744)">
<path d="M4 13H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16V12M12 8H15C15.5304 8 16.0391 8.21071 16.4142 8.58579C16.7893 8.96086 17 9.46957 17 10V11C17 11.554 16.775 12.055 16.411 12.417M13 13H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 8V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 16V10.5C9 9.83696 8.73661 9.20107 8.26777 8.73223C7.79893 8.26339 7.16304 8 6.5 8C5.83696 8 5.20107 8.26339 4.73223 8.73223C4.26339 9.20107 4 9.83696 4 10.5V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85744">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
