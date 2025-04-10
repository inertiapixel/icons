import React from "react";

export const BmpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_83637)">
<path d="M18 16V8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10C22 10.5304 21.7893 11.0391 21.4142 11.4142C21.0391 11.7893 20.5304 12 20 12H18" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12C4.53043 12 5.03914 11.7893 5.41421 11.4142C5.78929 11.0391 6 10.5304 6 10C6 9.46957 5.78929 8.96086 5.41421 8.58579C5.03914 8.21071 4.53043 8 4 8H2V16H4C4.53043 16 5.03914 15.7893 5.41421 15.4142C5.78929 15.0391 6 14.5304 6 14C6 13.4696 5.78929 12.9609 5.41421 12.5858C5.03914 12.2107 4.53043 12 4 12ZM4 12H2" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 16V8L12 14L15 8V16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83637">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
