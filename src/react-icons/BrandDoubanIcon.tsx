import React from "react";

export const BrandDoubanIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82389)">
<path d="M4 20H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 4H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 8H16C16.5304 8 17.0391 8.21071 17.4142 8.58579C17.7893 8.96086 18 9.46957 18 10V12C18 12.5304 17.7893 13.0391 17.4142 13.4142C17.0391 13.7893 16.5304 14 16 14H8C7.46957 14 6.96086 13.7893 6.58579 13.4142C6.21071 13.0391 6 12.5304 6 12V10C6 9.46957 6.21071 8.96086 6.58579 8.58579C6.96086 8.21071 7.46957 8 8 8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 14L14 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 17L9 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82389">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
