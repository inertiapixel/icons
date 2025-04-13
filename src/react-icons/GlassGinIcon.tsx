import React from "react";

export const GlassGinIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72754)">
<path d="M8 21H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 5C5.5 5.53043 6.18482 6.03914 7.40381 6.41421C8.62279 6.78929 10.2761 7 12 7C13.7239 7 15.3772 6.78929 16.5962 6.41421C17.8152 6.03914 18.5 5.53043 18.5 5C18.5 4.46957 17.8152 3.96086 16.5962 3.58579C15.3772 3.21071 13.7239 3 12 3C10.2761 3 8.62279 3.21071 7.40381 3.58579C6.18482 3.96086 5.5 4.46957 5.5 5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.75 4.5C5.138 5.25 5 6.5 5 8C5 9.85652 5.7375 11.637 7.05025 12.9497C8.36301 14.2625 10.1435 15 12 15C13.8565 15 15.637 14.2625 16.9497 12.9497C18.2625 11.637 19 9.85652 19 8C19 6.5 18.906 5.25 18.25 4.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72754">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
