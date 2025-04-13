import React from "react";

export const HighlightOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71811)">
<path d="M9 8.9994L3 14.9994V18.9994H7L13 12.9994M15 10.9994L17.503 8.4964C18.0334 7.96596 18.3314 7.24654 18.3314 6.4964C18.3314 5.74625 18.0334 5.02683 17.503 4.4964C17.2404 4.23375 16.9286 4.02541 16.5854 3.88327C16.2422 3.74113 15.8744 3.66797 15.503 3.66797C14.7529 3.66797 14.0334 3.96596 13.503 4.4964L11.006 6.9934"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 5.5L16.5 9.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 13.5L8.5 17.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 15H21V17M19 19H13L16 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71811">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
