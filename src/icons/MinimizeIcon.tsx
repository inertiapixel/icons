import React from "react";

export const MinimizeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_68376)">
<path d="M15 19V17C15 16.4696 15.2107 15.9609 15.5858 15.5858C15.9609 15.2107 16.4696 15 17 15H19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 5V7C15 7.53043 15.2107 8.03914 15.5858 8.41421C15.9609 8.78929 16.4696 9 17 9H19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 15H7C7.53043 15 8.03914 15.2107 8.41421 15.5858C8.78929 15.9609 9 16.4696 9 17V19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 9H7C7.53043 9 8.03914 8.78929 8.41421 8.41421C8.78929 8.03914 9 7.53043 9 7V5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68376">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
