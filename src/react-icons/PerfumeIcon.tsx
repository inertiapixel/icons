import React from "react";

export const PerfumeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66733)">
<path d="M10 6V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 6V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 11C5 10.4696 5.21071 9.96086 5.58579 9.58579C5.96086 9.21071 6.46957 9 7 9H17C17.5304 9 18.0391 9.21071 18.4142 9.58579C18.7893 9.96086 19 10.4696 19 11V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 15C10 15.5304 10.2107 16.0391 10.5858 16.4142C10.9609 16.7893 11.4696 17 12 17C12.5304 17 13.0391 16.7893 13.4142 16.4142C13.7893 16.0391 14 15.5304 14 15C14 14.4696 13.7893 13.9609 13.4142 13.5858C13.0391 13.2107 12.5304 13 12 13C11.4696 13 10.9609 13.2107 10.5858 13.5858C10.2107 13.9609 10 14.4696 10 15Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 3H15V6H9V3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66733">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
