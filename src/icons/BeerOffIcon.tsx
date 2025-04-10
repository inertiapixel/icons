import React from "react";

export const BeerOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_83945)">
<path d="M7 7V8.111C7 9.353 7.29 10.578 7.845 11.689L8.155 12.311C8.71061 13.4219 8.99992 14.6469 9 15.889V20H15V15.889C14.9999 15.6051 15.0149 15.3213 15.045 15.039M15.998 12.004L16.155 11.689C16.7106 10.5781 16.9999 9.35309 17 8.111V4H8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 8H8M12 8H17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83945">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
