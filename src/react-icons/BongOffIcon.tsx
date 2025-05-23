import React from "react";

export const BongOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83593)">
<path d="M9 5V3H13V9M14.5 10.5L17 8L19 10L16.5 12.5M16 16.005C15.9988 16.9062 15.7541 17.7903 15.2918 18.5638C14.8294 19.3374 14.1666 19.9716 13.3735 20.3993C12.5803 20.8271 11.6862 21.0326 10.7859 20.994C9.88555 20.9554 9.01236 20.6742 8.2587 20.1801C7.50504 19.686 6.89892 18.9975 6.50446 18.1872C6.10999 17.3769 5.94184 16.4751 6.01779 15.5772C6.09375 14.6792 6.41098 13.8184 6.93593 13.086C7.46089 12.3535 8.17406 11.7765 9 11.416V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 3H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.10156 17H15.9016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83593">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
