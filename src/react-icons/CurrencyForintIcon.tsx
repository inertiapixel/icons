import React from "react";

export const CurrencyForintIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77326)">
<path d="M11 4H7C6.20435 4 5.44129 4.31607 4.87868 4.87868C4.31607 5.44129 4 6.20435 4 7V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 11H4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 4V17C16 17.5304 16.2107 18.0391 16.5858 18.4142C16.9609 18.7893 17.4696 19 18 19H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 9H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77326">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
