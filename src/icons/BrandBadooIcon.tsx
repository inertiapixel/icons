import React from "react";

export const BrandBadooIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82745)">
<path d="M22 9.43015C22 15.2681 17.523 20.0001 12 20.0001C6.477 20.0001 2 15.3381 2 9.50014C2 6.83314 3.83 4.49014 6.322 4.07114C8.814 3.65314 11.222 5.46314 12 8.00014C12.768 5.46014 15.177 3.64614 17.668 4.06914C20.163 4.48614 22 6.75914 22 9.42914V9.43015Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 10C7.5 12.761 9.515 15 12 15C14.485 15 16.5 12.761 16.5 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82745">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
