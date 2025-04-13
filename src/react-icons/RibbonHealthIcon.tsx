import React from "react";

export const RibbonHealthIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65082)">
<path d="M7 21.0002C7 21.0002 16.286 11.1592 16.286 7.15923C16.3178 6.60224 16.2286 6.04497 16.0246 5.52572C15.8206 5.00647 15.5065 4.53756 15.104 4.15123C14.6934 3.75691 14.2057 3.45174 13.6715 3.25487C13.1374 3.058 12.5683 2.97369 12 3.00723C11.4318 2.97356 10.8627 3.05771 10.3286 3.25441C9.79442 3.4511 9.30669 3.75609 8.896 4.15023C8.49324 4.53679 8.17903 5.00602 7.97498 5.52564C7.77093 6.04525 7.68189 6.60291 7.714 7.16023C7.714 11.1602 17 21.0002 17 21.0002"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65082">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
