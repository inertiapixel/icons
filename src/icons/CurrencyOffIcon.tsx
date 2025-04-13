import React from "react";

export const CurrencyOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77229)">
<path d="M18.5305 14.5231C19.0204 13.2575 19.1319 11.8768 18.8513 10.549C18.5708 9.22127 17.9104 8.00367 16.9504 7.04444C15.9904 6.0852 14.7723 5.42569 13.4443 5.14618C12.1163 4.86667 10.7357 4.9792 9.4705 5.47009M7.0485 7.05209C5.73621 8.36531 4.99934 10.146 5 12.0026C5.00066 13.8591 5.73878 15.6393 7.052 16.9516C8.36522 18.2639 10.146 19.0007 12.0025 19.0001C13.859 18.9994 15.6392 18.2613 16.9515 16.9481"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4L7 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 4L17 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 20L7 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 20L17 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77229">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
