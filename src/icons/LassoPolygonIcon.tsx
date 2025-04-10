import React from "react";

export const LassoPolygonIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_70992)">
<path d="M4.028 13.252L3 10L5 3L12 8L20 5L21 14L12 17L6.856 15.745" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 15C3 15.5304 3.21071 16.0391 3.58579 16.4142C3.96086 16.7893 4.46957 17 5 17C5.53043 17 6.03914 16.7893 6.41421 16.4142C6.78929 16.0391 7 15.5304 7 15C7 14.4696 6.78929 13.9609 6.41421 13.5858C6.03914 13.2107 5.53043 13 5 13C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 17C5 18.42 5.316 19.805 6 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70992">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
