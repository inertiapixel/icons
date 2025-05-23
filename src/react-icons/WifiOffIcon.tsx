import React from "react";

export const WifiOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59852)">
<path d="M12 18H12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.17188 15.1711C9.92199 14.4213 10.9392 14 11.9999 14C13.0605 14 14.0778 14.4213 14.8279 15.1711"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.34375 12.3431C7.40418 11.2797 8.74372 10.5378 10.2077 10.2031M14.3708 10.3581C15.6134 10.7462 16.742 11.4329 17.6577 12.3581"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.51562 9.51671C4.53906 8.49114 5.73977 7.65938 7.05962 7.06171M10.1606 6.14171C12.0257 5.85251 13.9327 6.00733 15.7267 6.59357C17.5208 7.17982 19.1512 8.18098 20.4856 9.51571"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59852">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
