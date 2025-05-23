import React from "react";

export const CpuOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77713)">
<path d="M9 5H18C18.2652 5 18.5196 5.10536 18.7071 5.29289C18.8946 5.48043 19 5.73478 19 6V15M18.708 18.706C18.6151 18.7992 18.5048 18.8731 18.3833 18.9235C18.2618 18.974 18.1315 19 18 19H6C5.73478 19 5.48043 18.8946 5.29289 18.7071C5.10536 18.5196 5 18.2652 5 18V6C5 5.728 5.108 5.482 5.284 5.302"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 9H15V11M15 15H9V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 10H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 14H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 3V5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 3V5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 10H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 14H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 21V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 21V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77713">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
