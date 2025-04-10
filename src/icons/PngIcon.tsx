import React from "react";

export const PngIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_66048)">
<path d="M21 8H19C18.4696 8 17.9609 8.21071 17.5858 8.58579C17.2107 8.96086 17 9.46957 17 10V14C17 14.5304 17.2107 15.0391 17.5858 15.4142C17.9609 15.7893 18.4696 16 19 16H21V12H20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 16V8H5C5.53043 8 6.03914 8.21071 6.41421 8.58579C6.78929 8.96086 7 9.46957 7 10C7 10.5304 6.78929 11.0391 6.41421 11.4142C6.03914 11.7893 5.53043 12 5 12H3" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16V8L14 16V8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66048">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
