import React from "react";

export const BrandZalandoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81090)">
<path d="M7.53132 21C6.88132 21 6.53132 20.85 6.33532 20.73C6.06932 20.573 5.58232 20.167 5.13832 18.983C4.35912 16.7384 3.97444 14.3758 4.00132 12C4.01632 9.255 4.43732 6.93 5.13832 5.025C5.58232 3.825 6.06832 3.42 6.33532 3.262C6.52732 3.159 6.88032 3 7.53032 3C7.77432 3 8.06232 3.022 8.40132 3.075C10.6753 3.50383 12.8523 4.34247 14.8263 5.55H14.8333C16.8504 6.72533 18.6409 8.25204 20.1203 10.058C20.9033 11.048 20.9993 11.685 20.9993 12C20.9993 12.315 20.9033 12.953 20.1203 13.943C18.6403 15.7461 16.8498 17.2701 14.8333 18.443H14.8263C12.8528 19.6512 10.6755 20.4896 8.40132 20.917C8.11396 20.97 7.82352 20.9978 7.53132 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81090">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
