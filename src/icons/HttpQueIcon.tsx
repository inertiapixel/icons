import React from "react";

export const HttpQueIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_71479)">
<path d="M5 8C5.53043 8 6.03914 8.21071 6.41421 8.58579C6.78929 8.96086 7 9.46957 7 10V14C7 14.5304 6.78929 15.0391 6.41421 15.4142C6.03914 15.7893 5.53043 16 5 16C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V10C3 9.46957 3.21071 8.96086 3.58579 8.58579C3.96086 8.21071 4.46957 8 5 8Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 15L7 16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 8H17V16H21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 12H19.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8V14C10 14.5304 10.2107 15.0391 10.5858 15.4142C10.9609 15.7893 11.4696 16 12 16C12.5304 16 13.0391 15.7893 13.4142 15.4142C13.7893 15.0391 14 14.5304 14 14V8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71479">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
