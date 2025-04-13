import React from "react";

export const FileDatabaseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74344)">
<path d="M8 12.75C8 13.2141 8.42143 13.6592 9.17157 13.9874C9.92172 14.3156 10.9391 14.5 12 14.5C13.0609 14.5 14.0783 14.3156 14.8284 13.9874C15.5786 13.6592 16 13.2141 16 12.75C16 12.2859 15.5786 11.8408 14.8284 11.5126C14.0783 11.1844 13.0609 11 12 11C10.9391 11 9.92172 11.1844 9.17157 11.5126C8.42143 11.8408 8 12.2859 8 12.75Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12.5V16.25C8 17.216 9.79 18 12 18C14.21 18 16 17.216 16 16.25V12.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74344">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
