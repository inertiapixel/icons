import React from "react";

export const PentagramIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66754)">
<path d="M5.63606 5.63606C6.47179 4.80032 7.46395 4.13738 8.55588 3.68509C9.64782 3.23279 10.8182 3 12.0001 3C13.182 3 14.3523 3.23279 15.4442 3.68509C16.5362 4.13738 17.5283 4.80032 18.3641 5.63605C19.1998 6.47179 19.8627 7.46395 20.315 8.55588C20.7673 9.64782 21.0001 10.8182 21.0001 12.0001C21.0001 13.182 20.7673 14.3523 20.315 15.4442C19.8627 16.5362 19.1998 17.5283 18.3641 18.3641C16.6762 20.0519 14.387 21.0001 12.0001 21.0001C9.61309 21.0001 7.32389 20.0519 5.63606 18.3641C3.94822 16.6762 3 14.387 3 12.0001C3 9.61309 3.94822 7.32389 5.63606 5.63606Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.236 10.9988L20.5 14.9988H14L12 20.9988L10 14.9988H3.5L8.776 10.9988L6.72 4.71875L12 8.49875L17.28 4.71875L15.236 10.9988Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66754">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
