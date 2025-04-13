import React from "react";

export const UserScanIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60620)">
<path d="M10 9C10 9.53043 10.2107 10.0391 10.5858 10.4142C10.9609 10.7893 11.4696 11 12 11C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9C14 8.46957 13.7893 7.96086 13.4142 7.58579C13.0391 7.21071 12.5304 7 12 7C11.4696 7 10.9609 7.21071 10.5858 7.58579C10.2107 7.96086 10 8.46957 10 9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 8V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 16V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16C8 15.4696 8.21071 14.9609 8.58579 14.5858C8.96086 14.2107 9.46957 14 10 14H14C14.5304 14 15.0391 14.2107 15.4142 14.5858C15.7893 14.9609 16 15.4696 16 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60620">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
