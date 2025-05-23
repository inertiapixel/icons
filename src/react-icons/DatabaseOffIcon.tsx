import React from "react";

export const DatabaseOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_76965)">
<path d="M12.983 8.978C16.938 8.796 20 7.532 20 6C20 4.343 16.418 3 12 3C10.339 3 8.796 3.19 7.517 3.515M4.734 4.743C4.263 5.125 4 5.551 4 6C4 7.22 5.944 8.271 8.734 8.74"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6V12C4 13.657 7.582 15 12 15C12.986 15 13.93 14.933 14.802 14.81M17.989 13.99C19.24 13.46 20 12.762 20 12V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12V18C4 19.657 7.582 21 12 21C15.217 21 17.991 20.288 19.261 19.26M20 16V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_76965">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
