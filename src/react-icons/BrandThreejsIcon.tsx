import React from "react";

export const BrandThreejsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81362)">
<path d="M8 22L3 3L22 8.5L8 22Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5739 17.5811L6.42188 16.0051L15.2179 6.53906L17.1319 13.1791"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.573 17.58L11 11L17.13 13.179"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.52841 4.89453L11.0014 11.0015L4.69141 9.43753L9.52841 4.89453Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81362">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
