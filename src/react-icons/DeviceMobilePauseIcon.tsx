import React from "react";

export const DeviceMobilePauseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_76073)">
<path d="M13 21H8C7.46957 21 6.96086 20.7893 6.58579 20.4142C6.21071 20.0391 6 19.5304 6 19V5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3H16C16.5304 3 17.0391 3.21071 17.4142 3.58579C17.7893 3.96086 18 4.46957 18 5V13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 17V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 4H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17V17.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_76073">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
