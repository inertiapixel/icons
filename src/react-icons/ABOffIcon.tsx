import React from "react";

export const ABOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_86596)">
<path d="M3 16V10.5C3 9.83696 3.26339 9.20107 3.73223 8.73223C4.20107 8.26339 4.83696 8 5.5 8C6.16304 8 6.79893 8.26339 7.26777 8.73223C7.73661 9.20107 8 9.83696 8 10.5V16M8 12H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 12C19.5304 12 20.0391 11.7893 20.4142 11.4142C20.7893 11.0391 21 10.5304 21 10C21 9.46957 20.7893 8.96086 20.4142 8.58579C20.0391 8.21071 19.5304 8 19 8H16V12H19ZM19 12C19.4568 11.9998 19.8999 12.156 20.2556 12.4426C20.6113 12.7292 20.8582 13.129 20.9552 13.5754C21.0522 14.0217 20.9934 14.4879 20.7887 14.8962C20.584 15.3046 20.2457 15.6306 19.83 15.82"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_86596">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
