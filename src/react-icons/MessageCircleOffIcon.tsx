import React from "react";

export const MessageCircleOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68721)">
<path d="M8.595 4.57854C11.818 3.40254 15.62 3.96854 18.245 6.20854C21.227 8.75154 21.846 12.7315 19.881 15.8685M17.973 17.9775C15.186 20.1675 11.083 20.6435 7.7 19.0015L3 20.0015L4.3 16.1015C2.071 12.8055 2.806 8.59054 5.98 6.04454"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68721">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
