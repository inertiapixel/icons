import React from "react";

export const ExternalLinkOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74708)">
<path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 13.9992L12 11.9992M14.007 9.99219L20.007 3.99219"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 4H20V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74708">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
