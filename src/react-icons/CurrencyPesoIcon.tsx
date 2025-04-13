import React from "react";

export const CurrencyPesoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77217)">
<path d="M8 19V5H11.5C12.0909 5 12.6761 5.1164 13.2221 5.34254C13.768 5.56869 14.2641 5.90016 14.682 6.31802C15.0998 6.73588 15.4313 7.23196 15.6575 7.77792C15.8836 8.32389 16 8.90905 16 9.5C16 10.0909 15.8836 10.6761 15.6575 11.2221C15.4313 11.768 15.0998 12.2641 14.682 12.682C14.2641 13.0998 13.768 13.4313 13.2221 13.6575C12.6761 13.8836 12.0909 14 11.5 14H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 8H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 11H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77217">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
