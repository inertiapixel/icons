import React from "react";

export const BrandKakoTalkIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82062)">
<path d="M10 8V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 10L12 12.5L14 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4C16.97 4 21 7.358 21 11.5C21 15.642 16.97 19 12 19C11.33 19 10.677 18.939 10.05 18.823L7 21L7.592 18.038C4.851 16.754 3 14.308 3 11.5C3 7.358 7.03 4 12 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82062">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
