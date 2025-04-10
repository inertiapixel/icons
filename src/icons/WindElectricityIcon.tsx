import React from "react";

export const WindElectricityIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_59846)">
<path d="M20 7L17 12H21L18 17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 16H7C7.53043 16 8.03914 16.2107 8.41421 16.5858C8.78929 16.9609 9 17.4696 9 18C9 18.5304 8.78929 19.0391 8.41421 19.4142C8.03914 19.7893 7.53043 20 7 20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12H11C11.5304 12 12.0391 11.7893 12.4142 11.4142C12.7893 11.0391 13 10.5304 13 10C13 9.46957 12.7893 8.96086 12.4142 8.58579C12.0391 8.21071 11.5304 8 11 8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 8H6C6.53043 8 7.03914 7.78929 7.41421 7.41421C7.78929 7.03914 8 6.53043 8 6C8 5.46957 7.78929 4.96086 7.41421 4.58579C7.03914 4.21071 6.53043 4 6 4" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59846">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
