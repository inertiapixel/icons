import React from "react";

export const DeviceUsbIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_75797)">
<path d="M8 8H16V17C16 17.7956 15.6839 18.5587 15.1213 19.1213C14.5587 19.6839 13.7956 20 13 20H11C10.2044 20 9.44129 19.6839 8.87868 19.1213C8.31607 18.5587 8 17.7956 8 17V8Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8V4H14V8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75797">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
