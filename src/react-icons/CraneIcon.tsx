import React from "react";

export const CraneIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77685)">
<path d="M6 21H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 21V3L3 9H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 3L19 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 9V13C17.3956 13 17.7822 13.1173 18.1111 13.3371C18.44 13.5568 18.6964 13.8692 18.8478 14.2346C18.9991 14.6001 19.0387 15.0022 18.9616 15.3902C18.8844 15.7781 18.6939 16.1345 18.4142 16.4142C18.1345 16.6939 17.7781 16.8844 17.3902 16.9616C17.0022 17.0387 16.6001 16.9991 16.2346 16.8478C15.8692 16.6964 15.5568 16.44 15.3371 16.1111C15.1173 15.7822 15 15.3956 15 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77685">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
