import React from "react";

export const ScubaDivingIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64449)">
<path d="M19 12C19 12.2652 19.1054 12.5196 19.2929 12.7071C19.4804 12.8946 19.7348 13 20 13C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11C19.7348 11 19.4804 11.1054 19.2929 11.2929C19.1054 11.4804 19 11.7348 19 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2L5 5L6.5 9L10 11L16 13L17 17L19.5 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 8L15.5 9.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64449">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
