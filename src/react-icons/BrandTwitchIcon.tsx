import React from "react";

export const BrandTwitchIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81313)">
<path d="M4.001 5V16C4.001 16.2652 4.10636 16.5196 4.29389 16.7071C4.48143 16.8946 4.73578 17 5.001 17H7.001V21L11.001 17H16.585C16.851 17 17.105 16.895 17.292 16.707L19.707 14.293C19.894 14.105 20 13.851 20 13.585V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4H5C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4.001 4.73478 4.001 5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 8V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81313">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
