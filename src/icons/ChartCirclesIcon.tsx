import React from "react";

export const ChartCirclesIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79715)">
<path d="M4 9.5C4 10.9587 4.57946 12.3576 5.61091 13.3891C6.64236 14.4205 8.04131 15 9.5 15C10.9587 15 12.3576 14.4205 13.3891 13.3891C14.4205 12.3576 15 10.9587 15 9.5C15 8.04131 14.4205 6.64236 13.3891 5.61091C12.3576 4.57946 10.9587 4 9.5 4C8.04131 4 6.64236 4.57946 5.61091 5.61091C4.57946 6.64236 4 8.04131 4 9.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 14.5C9 15.9587 9.57946 17.3576 10.6109 18.3891C11.6424 19.4205 13.0413 20 14.5 20C15.9587 20 17.3576 19.4205 18.3891 18.3891C19.4205 17.3576 20 15.9587 20 14.5C20 13.0413 19.4205 11.6424 18.3891 10.6109C17.3576 9.57946 15.9587 9 14.5 9C13.0413 9 11.6424 9.57946 10.6109 10.6109C9.57946 11.6424 9 13.0413 9 14.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79715">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
