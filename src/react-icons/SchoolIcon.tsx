import React from "react";

export const SchoolIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64537)">
<path d="M22 9L12 5L2 9L12 13L22 9ZM22 9V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10.6016V16.0016C6 16.7972 6.63214 17.5603 7.75736 18.1229C8.88258 18.6855 10.4087 19.0016 12 19.0016C13.5913 19.0016 15.1174 18.6855 16.2426 18.1229C17.3679 17.5603 18 16.7972 18 16.0016V10.6016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64537">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
