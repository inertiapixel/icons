import React from "react";

export const GradienterIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72698)">
<path d="M3.22656 14C4.14356 18 7.72356 21 11.9996 21C16.2766 21 19.8576 18 20.7726 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.7808 10C20.3274 8.01081 19.2116 6.23468 17.6163 4.96283C16.021 3.69097 14.041 2.99888 12.0007 3.00002C9.95948 2.9957 7.97759 3.68658 6.38136 4.95891C4.78513 6.23125 3.66971 8.00919 3.21875 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72698">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
