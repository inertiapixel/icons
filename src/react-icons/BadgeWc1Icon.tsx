import React from "react";

export const BadgeWc1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84458)">
<path d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 9L7 15L9 11L11 15L11.5 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 10.5C17 10.1022 16.842 9.72064 16.5607 9.43934C16.2794 9.15804 15.8978 9 15.5 9C15.1022 9 14.7206 9.15804 14.4393 9.43934C14.158 9.72064 14 10.1022 14 10.5V13.5C14 13.8978 14.158 14.2794 14.4393 14.5607C14.7206 14.842 15.1022 15 15.5 15C15.8978 15 16.2794 14.842 16.5607 14.5607C16.842 14.2794 17 13.8978 17 13.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84458">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
