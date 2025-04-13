import React from "react";

export const BrandOkRuIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81810)">
<path d="M10 9C10 9.53043 10.2107 10.0391 10.5858 10.4142C10.9609 10.7893 11.4696 11 12 11C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9C14 8.46957 13.7893 7.96086 13.4142 7.58579C13.0391 7.21071 12.5304 7 12 7C11.4696 7 10.9609 7.21071 10.5858 7.58579C10.2107 7.96086 10 8.46957 10 9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 12C20 20 20 20 12 20C4 20 4 20 4 12C4 4 4 4 12 4C20 4 20 4 20 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 13C10.833 13.667 13.167 13.667 14.5 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 17L12 14L14.5 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13.5V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81810">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
