import React from "react";

export const GenderFemmeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72977)">
<path d="M7 9C7 10.3261 7.52678 11.5979 8.46447 12.5355C9.40215 13.4732 10.6739 14 12 14C13.3261 14 14.5979 13.4732 15.5355 12.5355C16.4732 11.5979 17 10.3261 17 9C17 7.67392 16.4732 6.40215 15.5355 5.46447C14.5979 4.52678 13.3261 4 12 4C10.6739 4 9.40215 4.52678 8.46447 5.46447C7.52678 6.40215 7 7.67392 7 9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 18H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72977">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
