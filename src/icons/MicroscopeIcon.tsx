import React from "react";

export const MicroscopeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68429)">
<path d="M5 21H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 18H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 18V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 11L12 14L18 8L15 5L9 11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 12.5L9 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 3L20 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21.0011C13.247 21.0012 14.4631 20.6127 15.4791 19.8898C16.4952 19.1668 17.2607 18.1452 17.6693 16.967C18.0779 15.7889 18.1093 14.5126 17.759 13.3158C17.4088 12.119 16.6943 11.0611 15.715 10.2891"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68429">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
