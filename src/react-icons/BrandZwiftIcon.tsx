import React from "react";

export const BrandZwiftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81058)">
<path d="M5.5 4C4.035 4 3 5.101 3 6.5C3 7.899 4.035 9 5.5 9H8L3.363 16.19C3.12788 16.5711 3.00245 17.0097 3.00051 17.4575C2.99857 17.9052 3.1202 18.3449 3.352 18.728C3.825 19.515 4.702 20 5.652 20H16.5C17.965 20 19 18.899 19 17.5C19 16.101 17.965 15 16.5 15H14L21 4H5.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81058">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
