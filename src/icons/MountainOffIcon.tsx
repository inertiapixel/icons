import React from "react";

export const MountainOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_67955)">
<path d="M18.281 14.2586L14.08 5.38657C13.8937 4.99281 13.5994 4.66006 13.2313 4.42704C12.8633 4.19402 12.4366 4.07031 12.001 4.07031C11.5654 4.07031 11.1387 4.19402 10.7707 4.42704C10.4026 4.66006 10.1083 4.99281 9.922 5.38657L9.757 5.73557M8.468 8.45457L3 19.9986H20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 11L9.5 13.5L11.5 11.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67955">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
