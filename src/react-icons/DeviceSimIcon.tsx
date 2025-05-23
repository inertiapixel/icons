import React from "react";

export const DeviceSimIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75948)">
<path d="M6 3H14.5L19 7.5V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H6C5.73478 21 5.48043 20.8946 5.29289 20.7071C5.10536 20.5196 5 20.2652 5 20V4C5 3.73478 5.10536 3.48043 5.29289 3.29289C5.48043 3.10536 5.73478 3 6 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 11H12V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 17V17.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 14V14.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 11V11.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 14V14.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 17V17.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75948">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
