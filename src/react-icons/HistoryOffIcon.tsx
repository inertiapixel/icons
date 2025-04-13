import React from "react";

export const HistoryOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71801)">
<path d="M3.05078 10.9991C3.25607 8.96105 4.15235 7.05451 5.59078 5.59613M7.90478 3.89913C9.59917 3.03161 11.525 2.72366 13.4054 3.01957C15.2858 3.31547 17.024 4.19997 18.3701 5.54594C19.7162 6.89191 20.6008 8.63002 20.8969 10.5104C21.193 12.3908 20.8852 14.3167 20.0178 16.0111M18.3228 18.3231C17.2494 19.381 15.9276 20.1524 14.4786 20.5666C13.0295 20.9808 11.4997 21.0245 10.0294 20.6936C8.5591 20.3628 7.19542 19.668 6.06347 18.673C4.93152 17.6781 4.06753 16.4148 3.55078 14.9991M3.05078 19.9991V14.9991H8.05078"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71801">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
