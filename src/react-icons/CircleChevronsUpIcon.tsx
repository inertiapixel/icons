import React from "react";

export const CircleChevronsUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79281)">
<path d="M9 15L12 12L15 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 11L12 8L15 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9997 20.999C14.3749 20.9641 16.64 19.9915 18.301 18.2933C19.9621 16.5951 20.8844 14.3092 20.8669 11.9337C20.8495 9.55834 19.8936 7.28618 18.2077 5.61266C16.5218 3.93914 14.2427 3 11.8672 3C9.49172 3 7.21258 3.93914 5.52669 5.61266C3.84081 7.28618 2.88492 9.55834 2.86743 11.9337C2.84995 14.3092 3.77228 16.5951 5.43334 18.2933C7.09441 19.9915 9.35947 20.9641 11.7347 20.999H11.9997Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79281">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
