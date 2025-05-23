import React from "react";

export const BrandGravatarIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82144)">
<path d="M5.64009 5.632C4.16665 7.10357 3.24911 9.04056 3.04384 11.1129C2.83858 13.1852 3.35828 15.2645 4.5144 16.9966C5.67051 18.7286 7.39148 20.0061 9.38401 20.6114C11.3765 21.2167 13.5173 21.1123 15.4415 20.316C17.3657 19.5197 18.9542 18.0808 19.9363 16.2445C20.9184 14.4082 21.2333 12.2881 20.8274 10.2456C20.4214 8.20315 19.3198 6.36463 17.7102 5.0434C16.1005 3.72218 14.0825 3.00002 12.0001 3V10.714"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82144">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
