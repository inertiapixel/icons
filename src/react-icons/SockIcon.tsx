import React from "react";

export const SockIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63448)">
<path d="M13 3V9L17.798 14.142C18.5392 14.8721 18.9667 15.8623 18.9899 16.9024C19.013 17.9426 18.63 18.9508 17.9221 19.7132C17.2142 20.4757 16.2371 20.9323 15.1981 20.9862C14.1591 21.0401 13.14 20.6871 12.357 20.002L5.621 13.592C5.42448 13.4049 5.26808 13.1798 5.16132 12.9303C5.05456 12.6809 4.99967 12.4123 5 12.141V3H13Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.895 15.768C8.603 15.047 9 14.091 9 13C9 11.9391 8.57857 10.9217 7.82843 10.1716C7.07828 9.42143 6.06087 9 5 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63448">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
