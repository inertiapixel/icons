import React from "react";

export const XdIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59474)">
<path d="M6 8L10 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 16L10 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 8V16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V10C18 9.46957 17.7893 8.96086 17.4142 8.58579C17.0391 8.21071 16.5304 8 16 8H14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59474">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
