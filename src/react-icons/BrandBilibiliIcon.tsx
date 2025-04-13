import React from "react";

export const BrandBilibiliIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82713)">
<path d="M3 10C3 8.93913 3.42143 7.92172 4.17157 7.17157C4.92172 6.42143 5.93913 6 7 6H17C18.0609 6 19.0783 6.42143 19.8284 7.17157C20.5786 7.92172 21 8.93913 21 10V16C21 17.0609 20.5786 18.0783 19.8284 18.8284C19.0783 19.5786 18.0609 20 17 20H7C5.93913 20 4.92172 19.5786 4.17157 18.8284C3.42143 18.0783 3 17.0609 3 16V10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 3L10 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 3L14 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 13V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 11V13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82713">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
