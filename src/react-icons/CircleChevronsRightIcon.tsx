import React from "react";

export const CircleChevronsRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79286)">
<path d="M9 9L12 12L9 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 9L16 12L13 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 11.9997C3.03497 14.3749 4.00756 16.64 5.70572 18.301C7.40388 19.9621 9.68987 20.8844 12.0653 20.8669C14.4407 20.8495 16.7128 19.8936 18.3864 18.2077C20.0599 16.5218 20.999 14.2427 20.999 11.8672C20.999 9.49172 20.0599 7.21258 18.3864 5.52669C16.7128 3.84081 14.4407 2.88492 12.0653 2.86743C9.68987 2.84995 7.40388 3.77228 5.70572 5.43334C4.00756 7.09441 3.03497 9.35947 3 11.7347V11.9997Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79286">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
