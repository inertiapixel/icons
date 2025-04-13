import React from "react";

export const ShieldCheck1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64067)">
<path d="M11.4588 20.846C8.44807 19.9127 5.92544 17.8324 4.43599 15.0545C2.94655 12.2765 2.60989 9.02411 3.49878 6C6.61431 6.14257 9.66295 5.06658 11.9988 3C14.3346 5.06658 17.3832 6.14257 20.4988 6C21.1775 8.30911 21.1461 10.7689 20.4088 13.06"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 19L17 21L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64067">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
