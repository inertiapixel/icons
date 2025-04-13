import React from "react";

export const CurrencyTugrikIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77136)">
<path d="M7 6H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 17L16 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 10L8 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77136">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
