import React from "react";

export const DiscGolfIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75291)">
<path d="M5 5H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 5C6.32 11.744 8.74 14.246 12 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 5C17.68 11.744 15.26 14.246 12 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 5C10 9.915 10.552 12.082 12 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 5C14 9.915 13.448 12.082 12 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3V5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 16C7.64 16.64 8.509 17 9.414 17H14.586C15.491 17 16.36 16.64 17 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 21H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75291">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
