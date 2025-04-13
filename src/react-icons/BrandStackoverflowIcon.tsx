import React from "react";

export const BrandStackoverflowIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81509)">
<path d="M4 17V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.32031 12.582L16.2763 13.418"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.78516 9.16797L16.6112 10.832"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.0977 5.76562L17.7057 8.23763"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81509">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
