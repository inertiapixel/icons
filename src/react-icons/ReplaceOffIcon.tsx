import React from "react";

export const ReplaceOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65244)">
<path d="M7 3H8C8.26522 3 8.51957 3.10536 8.70711 3.29289C8.89464 3.48043 9 3.73478 9 4V5M8.697 8.717C8.51036 8.89846 8.26031 8.99998 8 9H4C3.73478 9 3.48043 8.89464 3.29289 8.70711C3.10536 8.51957 3 8.26522 3 8V4C3 3.72 3.115 3.468 3.3 3.286"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 15H20C20.2652 15 20.5196 15.1054 20.7071 15.2929C20.8946 15.4804 21 15.7348 21 16V17M20.697 20.717C20.5104 20.8985 20.2603 21 20 21H16C15.7348 21 15.4804 20.8946 15.2929 20.7071C15.1054 20.5196 15 20.2652 15 20V16C15 15.72 15.115 15.468 15.3 15.286"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 11V8C21 7.46957 20.7893 6.96086 20.4142 6.58579C20.0391 6.21071 19.5304 6 19 6H13M13 6L16 9M13 6L16 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 13V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H11M11 18L8 15M11 18L8 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65244">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
