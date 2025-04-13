import React from "react";

export const Contrast2OffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77893)">
<path d="M4 18H6C7.5913 18 9.11742 17.3679 10.2426 16.2426C11.3679 15.1174 12 13.5913 12 12M12.878 8.874C13.4138 7.99612 14.1664 7.27072 15.0633 6.76744C15.9602 6.26416 16.9715 5.99989 18 6H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V16M19.414 19.414C19.039 19.7891 18.5304 19.9999 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.453 4.22 4.957 4.576 4.595"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77893">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
