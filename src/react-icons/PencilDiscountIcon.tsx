import React from "react";

export const PencilDiscountIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66926)">
<path d="M4 20.0003H8L18.5 9.5003C18.7626 9.23766 18.971 8.92585 19.1131 8.58269C19.2553 8.23953 19.3284 7.87174 19.3284 7.5003C19.3284 7.12887 19.2553 6.76107 19.1131 6.41791C18.971 6.07475 18.7626 5.76295 18.5 5.5003C18.2374 5.23766 17.9256 5.02932 17.5824 4.88718C17.2392 4.74503 16.8714 4.67187 16.5 4.67188C16.1286 4.67188 15.7608 4.74503 15.4176 4.88718C15.0744 5.02932 14.7626 5.23766 14.5 5.5003L4 16.0003V20.0003Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 6.5L17.5 10.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 21L21 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 21V21.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 16V16.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66926">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
