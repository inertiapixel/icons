import React from "react";

export const BrandDisneyIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82427)">
<path d="M3.2212 5.838C1.9142 5.688 2.0012 5.26 2.0012 5.044C2.0012 4.828 2.4252 4 6.3412 4C11.0352 4 21.0012 7.645 21.0012 14.042C21.0012 20.439 12.2912 18.973 10.5662 18.562C8.8422 18.15 5.0012 16.306 5.0012 14.388C5.0012 12.993 8.0812 12 11.7162 12C15.3502 12 17.0012 13.041 17.0012 14C17.0012 14.5 16.9272 15.229 16.0012 15.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.0184 8C9.96262 12.3332 9.96262 16.6668 10.0184 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82427">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
