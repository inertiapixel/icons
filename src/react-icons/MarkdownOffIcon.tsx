import React from "react";

export const MarkdownOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69293)">
<path d="M9 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 19H5.00001C4.46957 19 3.96087 18.7893 3.58579 18.4142C3.21072 18.0391 3.00001 17.5304 3.00001 17V7C2.99858 6.49456 3.18859 6.00733 3.5318 5.63628C3.87502 5.26524 4.34599 5.03791 4.85001 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 15V9L9 11L10 10M11 11V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 13.5L18 13M16 12V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69293">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
