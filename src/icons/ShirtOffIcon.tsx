import React from "react";

export const ShirtOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_63944)">
<path d="M8.243 4.252L9 4C9 4.43 9.09 4.837 9.252 5.206M10.647 6.678C11.1044 6.90913 11.6134 7.01923 12.1254 6.99781C12.6375 6.97638 13.1355 6.82414 13.572 6.5556C14.0085 6.28707 14.3689 5.91119 14.6189 5.46382C14.8689 5.01644 15.0001 4.51248 15 4L21 6V11H18V14M18 18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V11H3V6L5.26 5.247" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63944">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
