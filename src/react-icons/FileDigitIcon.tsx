import React from "react";

export const FileDigitIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74320)">
<path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 13C9 12.7348 9.10536 12.4804 9.29289 12.2929C9.48043 12.1054 9.73478 12 10 12H11C11.2652 12 11.5196 12.1054 11.7071 12.2929C11.8946 12.4804 12 12.7348 12 13V16C12 16.2652 11.8946 16.5196 11.7071 16.7071C11.5196 16.8946 11.2652 17 11 17H10C9.73478 17 9.48043 16.8946 9.29289 16.7071C9.10536 16.5196 9 16.2652 9 16V13Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 12V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74320">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
