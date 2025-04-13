import React from "react";

export const FlagDiscountIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73561)">
<path d="M12.804 14.6406C12.5148 14.455 12.2454 14.2402 12 13.9996C11.0654 13.0835 9.80876 12.5703 8.5 12.5703C7.19124 12.5703 5.93464 13.0835 5 13.9996V4.9996C5.93464 4.08346 7.19124 3.57031 8.5 3.57031C9.80876 3.57031 11.0654 4.08346 12 4.9996C12.9346 5.91573 14.1912 6.42888 15.5 6.42888C16.8088 6.42888 18.0654 5.91573 19 4.9996V12.9996"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 21V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 21L21 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 21V21.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 16V16.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73561">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
