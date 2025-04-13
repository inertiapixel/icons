import React from "react";

export const PresentationAnalyticsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65821)">
<path d="M9 12V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 12V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 4H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 20H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65821">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
