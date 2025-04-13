import React from "react";

export const MicrowaveOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68420)">
<path d="M18 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17V7C3 6.73478 3.10536 6.48043 3.29289 6.29289C3.48043 6.10536 3.73478 6 4 6H6M10 6H20C20.2652 6 20.5196 6.10536 20.7071 6.29289C20.8946 6.48043 21 6.73478 21 7V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 6V11M15 15V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 12H18.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 9H18.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 10.5002C7.5 9.83325 8 9.83325 9 10.5002C9.636 10.7652 10.272 11.1653 10.907 10.9283"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 13.5002C7.5 12.8332 8 12.8332 9 13.5002C9.833 13.8472 10.667 14.4262 11.5 13.5002"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68420">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
