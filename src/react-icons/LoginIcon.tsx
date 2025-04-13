import React from "react";

export const LoginIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69890)">
<path d="M15 8V6C15 5.46957 14.7893 4.96086 14.4142 4.58579C14.0391 4.21071 13.5304 4 13 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H13C13.5304 20 14.0391 19.7893 14.4142 19.4142C14.7893 19.0391 15 18.5304 15 18V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 12H8L11 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 15L8 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69890">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
