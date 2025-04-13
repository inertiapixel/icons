import React from "react";

export const CurrencyBitcoinIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77429)">
<path d="M6 6H14C14.7956 6 15.5587 6.31607 16.1213 6.87868C16.6839 7.44129 17 8.20435 17 9C17 9.79565 16.6839 10.5587 16.1213 11.1213C15.5587 11.6839 14.7956 12 14 12C14.7956 12 15.5587 12.3161 16.1213 12.8787C16.6839 13.4413 17 14.2044 17 15C17 15.7956 16.6839 16.5587 16.1213 17.1213C15.5587 17.6839 14.7956 18 14 18H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 6V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 3V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 3V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 18V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 18V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77429">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
