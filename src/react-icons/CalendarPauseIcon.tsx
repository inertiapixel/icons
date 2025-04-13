import React from "react";

export const CalendarPauseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80425)">
<path d="M13 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 3V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 3V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 11H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 17V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80425">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
