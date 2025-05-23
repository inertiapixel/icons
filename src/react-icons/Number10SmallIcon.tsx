import React from "react";

export const Number10SmallIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67447)">
<path d="M7 10L9 8V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 10V14C13 14.5304 13.2107 15.0391 13.5858 15.4142C13.9609 15.7893 14.4696 16 15 16C15.5304 16 16.0391 15.7893 16.4142 15.4142C16.7893 15.0391 17 14.5304 17 14V10C17 9.46957 16.7893 8.96086 16.4142 8.58579C16.0391 8.21071 15.5304 8 15 8C14.4696 8 13.9609 8.21071 13.5858 8.58579C13.2107 8.96086 13 9.46957 13 10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67447">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
