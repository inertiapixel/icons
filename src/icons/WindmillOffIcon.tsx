import React from "react";

export const WindmillOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_59827)">
<path d="M15.061 11.06C16.241 10.236 17 8.95 17 7.5C17 5.01 14.76 3 12 3V8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12C12 14.76 14.01 17 16.5 17C16.666 17 16.83 16.99 16.99 16.97M19.614 15.61C20.47 14.7 21 13.42 21 12H16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12C9.24 12 7 14.01 7 16.5C7 18.99 9.24 21 12 21V12Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.981 7.03125C4.737 7.31625 3 9.43325 3 11.9983H12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59827">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
