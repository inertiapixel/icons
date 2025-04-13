import React from "react";

export const BrandStorybookIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81473)">
<path d="M5 4L5.5 20.5L19 21V3L5 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 14.999C9.6 16.499 10.639 16.999 12.283 16.999H12C13.8 16.999 15 16.025 15 14.564C15 13.37 14.169 12.765 12.853 12.231L10.878 11.429C9.728 10.962 9 10.007 9 8.96198C9 7.99198 9.899 7.17598 11.087 7.06898L11.7 7.01398C13.228 6.87598 14.7 7.77598 15 8.99898"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 3.5V4.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81473">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
