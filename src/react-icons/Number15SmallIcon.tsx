import React from "react";

export const Number15SmallIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67421)">
<path d="M7 10L9 8V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 15C13 15.2652 13.1054 15.5196 13.2929 15.7071C13.4804 15.8946 13.7348 16 14 16H16C16.2652 16 16.5196 15.8946 16.7071 15.7071C16.8946 15.5196 17 15.2652 17 15V13C17 12.7348 16.8946 12.4804 16.7071 12.2929C16.5196 12.1054 16.2652 12 16 12H13V8H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67421">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
