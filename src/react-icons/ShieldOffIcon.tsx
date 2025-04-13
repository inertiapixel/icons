import React from "react";

export const ShieldOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64007)">
<path d="M17.6689 17.667C16.1261 19.2844 14.1624 20.4387 11.9989 21C10.4421 20.5962 8.98234 19.8836 7.7064 18.9045C6.43047 17.9254 5.36437 16.6998 4.57145 15.3005C3.77854 13.9013 3.27499 12.3569 3.09073 10.7592C2.90647 9.16147 3.04527 7.54302 3.49886 6C4.29286 6.036 5.08186 5.994 5.85586 5.876M8.98386 4.95C10.081 4.45493 11.0974 3.79757 11.9989 3C14.3347 5.06658 17.3833 6.14257 20.4989 6C20.9565 7.55707 21.0936 9.19081 20.9018 10.8024C20.71 12.4139 20.1932 13.9699 19.3829 15.376"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64007">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
