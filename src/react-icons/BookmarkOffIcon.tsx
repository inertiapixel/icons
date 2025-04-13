import React from "react";

export const BookmarkOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83538)">
<path d="M7.708 3.72101C8.37954 3.25041 9.17999 2.99861 10 3.00001H14C15.0609 3.00001 16.0783 3.42143 16.8284 4.17158C17.5786 4.92172 18 5.93914 18 7.00001V14M18 18V21L12 17L6 21V7.00001C6 6.69201 6.035 6.39101 6.1 6.10301"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83538">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
