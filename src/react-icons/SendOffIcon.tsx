import React from "react";

export const SendOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64360)">
<path d="M10 14L12 12M14 10L21 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.7186 6.713L21.0006 3L17.2856 13.289M16.2226 16.23L14.5006 21C14.4567 21.0957 14.3862 21.1769 14.2976 21.2338C14.209 21.2906 14.1059 21.3209 14.0006 21.3209C13.8952 21.3209 13.7921 21.2906 13.7035 21.2338C13.6149 21.1769 13.5444 21.0957 13.5006 21L10.0006 14L3.00056 10.5C2.90482 10.4561 2.82369 10.3857 2.7668 10.2971C2.70992 10.2084 2.67969 10.1053 2.67969 10C2.67969 9.89468 2.70992 9.79158 2.7668 9.70295C2.82369 9.61431 2.90482 9.54387 3.00056 9.5L7.77256 7.777"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64360">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
