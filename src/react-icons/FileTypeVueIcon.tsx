import React from "react";

export const FileTypeVueIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73908)">
<path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 12V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15L6 21L8 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 15V19.5C11 19.8978 11.158 20.2794 11.4393 20.5607C11.7206 20.842 12.1022 21 12.5 21C12.8978 21 13.2794 20.842 13.5607 20.5607C13.842 20.2794 14 19.8978 14 19.5V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 15H17V21H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 18H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73908">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
