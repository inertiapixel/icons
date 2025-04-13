import React from "react";

export const FileTypeZipIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73885)">
<path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 12V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 18H17.5C17.8978 18 18.2794 17.842 18.5607 17.5607C18.842 17.2794 19 16.8978 19 16.5C19 16.1022 18.842 15.7206 18.5607 15.4393C18.2794 15.158 17.8978 15 17.5 15H16V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 15H8L5 21H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73885">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
