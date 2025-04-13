import React from "react";

export const OutletIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67206)">
<path d="M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12.5C9.27614 12.5 9.5 12.2761 9.5 12C9.5 11.7239 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.7239 8.5 12C8.5 12.2761 8.72386 12.5 9 12.5Z"   strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 12.5C15.2761 12.5 15.5 12.2761 15.5 12C15.5 11.7239 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.7239 14.5 12C14.5 12.2761 14.7239 12.5 15 12.5Z"   strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67206">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
