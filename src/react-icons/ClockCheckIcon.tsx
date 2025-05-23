import React from "react";

export const ClockCheckIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78599)">
<path d="M20.9419 13.021C21.1465 11.2288 20.8079 9.41654 19.97 7.81918C19.1321 6.22183 17.8335 4.91311 16.2427 4.06278C14.6519 3.21245 12.8423 2.85975 11.0486 3.05043C9.25492 3.24111 7.55991 3.96637 6.18344 5.13213C4.80697 6.2979 3.81256 7.85037 3.32918 9.5882C2.8458 11.326 2.89576 13.169 3.47259 14.8781C4.04941 16.5871 5.12648 18.0835 6.56409 19.1729C8.00171 20.2624 9.73352 20.8948 11.5349 20.988"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L15 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 19L17 21L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78599">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
