import React from "react";

export const BoxOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82970)">
<path d="M17.765 17.757L12 21L4 16.5V7.5L6.236 6.242M8.806 4.797L12 3L20 7.5V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5625 10.559L20.0015 7.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12L4 7.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82970">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
