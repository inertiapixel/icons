import React from "react";

export const TridentIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60902)">
<path d="M3 6L5 4V7C5 8.85652 5.7375 10.637 7.05025 11.9497C8.36301 13.2625 10.1435 14 12 14C13.8565 14 15.637 13.2625 16.9497 11.9497C18.2625 10.637 19 8.85652 19 7V4L21 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21V3M12 3L10 5M12 3L14 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60902">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
