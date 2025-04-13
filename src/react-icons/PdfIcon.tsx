import React from "react";

export const PdfIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66972)">
<path d="M10 8V16H12C12.5304 16 13.0391 15.7893 13.4142 15.4142C13.7893 15.0391 14 14.5304 14 14V10C14 9.46957 13.7893 8.96086 13.4142 8.58579C13.0391 8.21071 12.5304 8 12 8H10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12H5C5.53043 12 6.03914 11.7893 6.41421 11.4142C6.78929 11.0391 7 10.5304 7 10C7 9.46957 6.78929 8.96086 6.41421 8.58579C6.03914 8.21071 5.53043 8 5 8H3V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 12H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 8H17V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66972">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
