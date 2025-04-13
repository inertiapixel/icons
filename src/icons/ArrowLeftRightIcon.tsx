import React from "react";

export const ArrowLeftRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85346)">
<path d="M17 13L21 9L17 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 13L3 9L7 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14C12 12.6739 12.5268 11.4021 13.4645 10.4645C14.4021 9.52678 15.6739 9 17 9H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 19V14C12 13.3434 11.8707 12.6932 11.6194 12.0866C11.3681 11.48 10.9998 10.9288 10.5355 10.4645C10.0712 10.0002 9.52004 9.63188 8.91342 9.3806C8.30679 9.12933 7.65661 9 7 9H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85346">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
