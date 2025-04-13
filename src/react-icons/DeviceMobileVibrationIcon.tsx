import React from "react";

export const DeviceMobileVibrationIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_76015)">
<path d="M3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5V19C15 19.5304 14.7893 20.0391 14.4142 20.4142C14.0391 20.7893 13.5304 21 13 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 4H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 17V17.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 6L19 9L21 12L19 15L21 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_76015">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
