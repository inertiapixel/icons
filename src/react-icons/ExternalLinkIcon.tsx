import React from "react";

export const ExternalLinkIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74703)">
<path d="M12 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 13L20 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 4H20V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74703">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
