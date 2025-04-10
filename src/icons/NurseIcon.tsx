import React from "react";

export const NurseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_67295)">
<path d="M12 6.00002C14.941 6.00002 17.685 6.84702 20 8.31002L18 18H6L4 8.30902C6.39374 6.79627 9.16833 5.99546 12 6.00002Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 12H14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 10V14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67295">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
