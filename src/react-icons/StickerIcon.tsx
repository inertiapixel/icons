import React from "react";

export const StickerIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62389)">
<path d="M19.9994 12L17.9994 12.5C17.1266 12.5763 16.2477 12.4606 15.4244 12.161C14.6011 11.8613 13.8534 11.385 13.2339 10.7655C12.6144 10.146 12.1381 9.39828 11.8384 8.575C11.5388 7.75171 11.423 6.87279 11.4994 6L11.9994 4L19.9994 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 12C20 13.5823 19.5308 15.129 18.6518 16.4446C17.7727 17.7602 16.5233 18.7855 15.0615 19.391C13.5997 19.9965 11.9911 20.155 10.4393 19.8463C8.88743 19.5376 7.46197 18.7757 6.34315 17.6569C5.22433 16.538 4.4624 15.1126 4.15372 13.5607C3.84504 12.0089 4.00347 10.4003 4.60897 8.93853C5.21447 7.47672 6.23985 6.22729 7.55544 5.34824C8.87103 4.46919 10.4178 4 12 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62389">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
