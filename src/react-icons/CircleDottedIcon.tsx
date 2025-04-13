import React from "react";

export const CircleDottedIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79083)">
<path d="M7.5 4.21094V4.22094"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.21094 7.5V7.51"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12V12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.21094 16.5V16.51"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 19.7891V19.7991"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21V21.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 19.7891V19.7991"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.7891 16.5V16.51"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 12V12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.7891 7.5V7.51"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 4.21094V4.22094"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3V3.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79083">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
