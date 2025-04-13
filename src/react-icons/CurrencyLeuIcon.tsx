import React from "react";

export const CurrencyLeuIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77269)">
<path d="M17 18H10C9.20435 18 8.44129 17.6839 7.87868 17.1213C7.31607 16.5587 7 15.7956 7 15V5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77269">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
