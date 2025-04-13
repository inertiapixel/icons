import React from "react";

export const ArrowsJoin2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84932)">
<path d="M3 7H4.948C6.861 7 8.653 7.933 9.75 9.5C10.2904 10.2721 11.0091 10.9025 11.8451 11.3377C12.681 11.7729 13.6096 12.0001 14.552 12H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 17H4.95C5.89187 17 6.81985 16.7728 7.65513 16.3375C8.49042 15.9023 9.20836 15.272 9.748 14.5C10.2876 13.728 11.0056 13.0977 11.8409 12.6625C12.6762 12.2272 13.6041 12 14.546 12H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 15L21 12L18 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84932">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
