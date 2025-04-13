import React from "react";

export const PointOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66029)">
<path d="M9.1517 9.194C8.40684 9.94947 7.9926 10.9699 8.0001 12.0308C8.0076 13.0917 8.43623 14.1061 9.1917 14.851C9.94717 15.5959 10.9676 16.0101 12.0285 16.0026C13.0894 15.9951 14.1038 15.5665 14.8487 14.811M16.0017 12C16.0017 10.9391 15.5803 9.92172 14.8301 9.17157C14.08 8.42143 13.0626 8 12.0017 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66029">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
