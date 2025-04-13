import React from "react";

export const PointerPauseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65966)">
<path d="M15.72 13.163L14.778 12.222L17.891 10.132C18.1065 10.0159 18.2814 9.8367 18.3921 9.61839C18.5029 9.40008 18.5442 9.15312 18.5106 8.91064C18.477 8.66816 18.37 8.44177 18.204 8.26184C18.038 8.08191 17.821 7.95704 17.582 7.904L4 4L7.904 17.563C7.95718 17.8019 8.08215 18.0189 8.26214 18.1847C8.44214 18.3506 8.66855 18.4574 8.91101 18.491C9.15347 18.5245 9.40037 18.4831 9.61862 18.3722C9.83686 18.2614 10.016 18.0865 10.132 17.871L12.222 14.778L13.191 15.747"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 17V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65966">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
