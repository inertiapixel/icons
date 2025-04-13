import React from "react";

export const BrandStorytelIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81470)">
<path d="M4.103 22C6.395 19.067 20.928 19.57 20.928 10.462C20.928 4.164 15.954 2 12.477 2C9 2 3 5.036 3 13.241C3 19.615 4.103 22 4.103 22Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81470">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
