import React from "react";

export const CurrencyRenminbiIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77194)">
<path d="M15 9V17C15 17.5304 15.2107 18.0391 15.5858 18.4142C15.9609 18.7893 16.4696 19 17 19C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 9H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 5H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 9V13C9 15.5 8.333 17 7 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77194">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
