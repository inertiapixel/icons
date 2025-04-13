import React from "react";

export const BrandPushoverIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81692)">
<path d="M6.15959 10.985C5.32959 9.05 7.68959 3 14.3546 3C17.6876 3 18.9996 4.382 18.9996 6.9C18.9996 9.497 16.3876 13 9.99959 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 6L7 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81692">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
