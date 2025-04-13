import React from "react";

export const TomlIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61480)">
<path d="M1.5 8H4.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 8V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 8C8.89782 8 9.27936 8.15804 9.56066 8.43934C9.84196 8.72064 10 9.10218 10 9.5V14.5C10 14.8978 9.84196 15.2794 9.56066 15.5607C9.27936 15.842 8.89782 16 8.5 16C8.10218 16 7.72064 15.842 7.43934 15.5607C7.15804 15.2794 7 14.8978 7 14.5V9.5C7 9.10218 7.15804 8.72064 7.43934 8.43934C7.72064 8.15804 8.10218 8 8.5 8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 16V8L15 13L17 8V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 8V16H22.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61480">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
