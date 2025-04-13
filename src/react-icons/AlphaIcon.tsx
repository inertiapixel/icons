import React from "react";

export const AlphaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85904)">
<path d="M18.0984 6C16.9984 8.913 16.1984 10.913 15.6984 12M15.6984 12C13.8194 16.088 11.9854 18 9.69844 18C7.29844 18 4.89844 15.6 4.89844 12C4.89844 8.4 7.29844 6 9.69844 6C11.9654 6 13.8334 7.986 15.6984 12ZM15.6984 12C16.2104 13.102 17.0104 15.102 18.0984 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85904">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
