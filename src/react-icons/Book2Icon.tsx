import React from "react";

export const Book2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83583)">
<path d="M19 4V20H7C6.46957 20 5.96086 19.7893 5.58579 19.4142C5.21071 19.0391 5 18.5304 5 18V6C5 5.46957 5.21071 4.96086 5.58579 4.58579C5.96086 4.21071 6.46957 4 7 4H19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16H7C6.46957 16 5.96086 16.2107 5.58579 16.5858C5.21071 16.9609 5 17.4696 5 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 8H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83583">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
