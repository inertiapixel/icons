import React from "react";

export const CurrencyWonIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77131)">
<path d="M4 6L7.245 17.358C7.29482 17.5327 7.3993 17.6868 7.5431 17.7978C7.68691 17.9088 7.86248 17.9707 8.04409 17.9747C8.22569 17.9786 8.40378 17.9242 8.55223 17.8195C8.70068 17.7149 8.8117 17.5654 8.869 17.393L12 8L15.131 17.393C15.1883 17.5654 15.2993 17.7149 15.4478 17.8195C15.5962 17.9242 15.7743 17.9786 15.9559 17.9747C16.1375 17.9707 16.3131 17.9088 16.4569 17.7978C16.6007 17.6868 16.7052 17.5327 16.755 17.358L20 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 10H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 14H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77131">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
