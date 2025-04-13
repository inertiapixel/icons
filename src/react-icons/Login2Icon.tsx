import React from "react";

export const Login2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69895)">
<path d="M9 8V6C9 5.46957 9.21071 4.96086 9.58579 4.58579C9.96086 4.21071 10.4696 4 11 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H11C10.4696 20 9.96086 19.7893 9.58579 19.4142C9.21071 19.0391 9 18.5304 9 18V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12H16L13 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 15L16 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69895">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
