import React from "react";

export const PointerCancelIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66017)">
<path d="M15.526 12.97L14.778 12.222L17.891 10.132C18.1065 10.0159 18.2814 9.8367 18.3921 9.61839C18.5029 9.40008 18.5442 9.15312 18.5106 8.91064C18.477 8.66816 18.37 8.44177 18.204 8.26184C18.038 8.08191 17.821 7.95704 17.582 7.904L4 4L7.904 17.563C7.95718 17.8019 8.08215 18.0189 8.26214 18.1847C8.44214 18.3506 8.66855 18.4574 8.91101 18.491C9.15347 18.5245 9.40037 18.4831 9.61862 18.3722C9.83686 18.2614 10.016 18.0865 10.132 17.871L12.222 14.778L12.936 15.492"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19C16 19.7956 16.3161 20.5587 16.8787 21.1213C17.4413 21.6839 18.2044 22 19 22C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19C22 18.2044 21.6839 17.4413 21.1213 16.8787C20.5587 16.3161 19.7956 16 19 16C18.2044 16 17.4413 16.3161 16.8787 16.8787C16.3161 17.4413 16 18.2044 16 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 21L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66017">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
