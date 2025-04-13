import React from "react";

export const FileCvIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74350)">
<path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 12.5C11 12.1022 10.842 11.7206 10.5607 11.4393C10.2794 11.158 9.89782 11 9.5 11C9.10218 11 8.72064 11.158 8.43934 11.4393C8.15804 11.7206 8 12.1022 8 12.5V15.5C8 15.8978 8.15804 16.2794 8.43934 16.5607C8.72064 16.842 9.10218 17 9.5 17C9.89782 17 10.2794 16.842 10.5607 16.5607C10.842 16.2794 11 15.8978 11 15.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 11L14.5 17L16 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74350">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
