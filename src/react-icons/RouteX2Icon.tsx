import React from "react";

export const RouteX2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64824)">
<path d="M3 17L7 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 17L3 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 3L21 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 3L17 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 5C13.4696 5 12.9609 5.21071 12.5858 5.58579C12.2107 5.96086 12 6.46957 12 7V17C12 17.5304 11.7893 18.0391 11.4142 18.4142C11.0391 18.7893 10.5304 19 10 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64824">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
