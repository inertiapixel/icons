import React from "react";

export const CurrencyBahtIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77438)">
<path d="M8 6H13C13.7956 6 14.5587 6.31607 15.1213 6.87868C15.6839 7.44129 16 8.20435 16 9V9.143C16 9.90072 15.699 10.6274 15.1632 11.1632C14.6274 11.699 13.9007 12 13.143 12H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12H13C13.7956 12 14.5587 12.3161 15.1213 12.8787C15.6839 13.4413 16 14.2044 16 15V15.143C16 15.9007 15.699 16.6274 15.1632 17.1632C14.6274 17.699 13.9007 18 13.143 18H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 6V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 4V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 18V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77438">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
