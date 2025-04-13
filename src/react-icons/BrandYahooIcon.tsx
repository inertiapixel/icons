import React from "react";

export const BrandYahooIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81116)">
<path d="M3 6H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 18H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 6L10 13V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 13L16 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 8H17.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 11V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 18V18.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81116">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
