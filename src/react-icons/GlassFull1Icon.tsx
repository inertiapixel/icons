import React from "react";

export const GlassFull1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72760)">
<path d="M8 21H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 3L18 10C18 13.012 15.314 15 12 15C8.686 15 6 13.012 6 10L7 3H17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10C6.86548 9.35089 7.91815 9 9 9C10.0819 9 11.1345 9.35089 12 10C12.8655 10.6491 13.9181 11 15 11C16.0819 11 17.1345 10.6491 18 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72760">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
