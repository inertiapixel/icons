import React from "react";

export const TextWrapColumnIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61757)">
<path d="M7 9H14C14.7956 9 15.5587 9.31607 16.1213 9.87868C16.6839 10.4413 17 11.2044 17 12C17 12.7956 16.6839 13.5587 16.1213 14.1213C15.5587 14.6839 14.7956 15 14 15H10L12 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17L10 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 3V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61757">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
