import React from "react";

export const RobotOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65026)">
<path d="M8 4H16C16.5304 4 17.0391 4.21071 17.4142 4.58579C17.7893 4.96086 18 5.46957 18 6V10C18 10.5304 17.7893 11.0391 17.4142 11.4142C17.0391 11.7893 16.5304 12 16 12M12 12H8C7.46957 12 6.96086 11.7893 6.58579 11.4142C6.21071 11.0391 6 10.5304 6 10V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 15V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 16L9 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 18H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 8V8.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65026">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
