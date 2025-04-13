import React from "react";

export const GrillIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72591)">
<path d="M19 8H5C5 9.5913 5.63214 11.1174 6.75736 12.2426C7.88258 13.3679 9.4087 14 11 14H13C14.5531 14.0011 16.0461 13.3999 17.165 12.3229C18.284 11.2459 18.9418 9.77698 19 8.225V8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 20C16.4696 20 15.9609 19.7893 15.5858 19.4142C15.2107 19.0391 15 18.5304 15 18C15 17.4696 15.2107 16.9609 15.5858 16.5858C15.9609 16.2107 16.4696 16 17 16C17.5304 16 18.0391 16.2107 18.4142 16.5858C18.7893 16.9609 19 17.4696 19 18C19 18.5304 18.7893 19.0391 18.4142 19.4142C18.0391 19.7893 17.5304 20 17 20Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 14L16 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 14L6 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 18H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 5V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 5V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72591">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
