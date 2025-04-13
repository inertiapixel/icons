import React from "react";

export const RobotFaceIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65036)">
<path d="M6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 16C10 16.667 11 17 12 17C13 17 14 16.667 15 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 7L8 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 7L16 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 12V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65036">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
