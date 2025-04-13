import React from "react";

export const ClickIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78706)">
<path d="M3 12H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.80156 7.80156L5.60156 5.60156"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.1992 7.80156L18.3992 5.60156"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.80156 16.1992L5.60156 18.3992"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12L21 15L17 17L15 21L12 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78706">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
