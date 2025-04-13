import React from "react";

export const ImageInPictureIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71390)">
<path d="M13 15C11 15 8 16 8 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 13C4 12.4696 4.21071 11.9609 4.58579 11.5858C4.96086 11.2107 5.46957 11 6 11H11C11.5304 11 12.0391 11.2107 12.4142 11.5858C12.7893 11.9609 13 12.4696 13 13V18C13 18.5304 12.7893 19.0391 12.4142 19.4142C12.0391 19.7893 11.5304 20 11 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V13Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 7V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 4H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 11V13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 17V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71390">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
