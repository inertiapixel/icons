import React from "react";

export const CamperIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80160)">
<path d="M5 18C5 18.5304 5.21071 19.0391 5.58579 19.4142C5.96086 19.7893 6.46957 20 7 20C7.53043 20 8.03914 19.7893 8.41421 19.4142C8.78929 19.0391 9 18.5304 9 18C9 17.4696 8.78929 16.9609 8.41421 16.5858C8.03914 16.2107 7.53043 16 7 16C6.46957 16 5.96086 16.2107 5.58579 16.5858C5.21071 16.9609 5 17.4696 5 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 18C15 18.5304 15.2107 19.0391 15.5858 19.4142C15.9609 19.7893 16.4696 20 17 20C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18C19 17.4696 18.7893 16.9609 18.4142 16.5858C18.0391 16.2107 17.5304 16 17 16C16.4696 16 15.9609 16.2107 15.5858 16.5858C15.2107 16.9609 15 17.4696 15 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H17C18.0609 4 19.0783 4.42143 19.8284 5.17157C20.5786 5.92172 21 6.93913 21 8H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 18H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 18H20C20.2652 18 20.5196 17.8946 20.7071 17.7071C20.8946 17.5196 21 17.2652 21 17V13L18 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 13H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 8V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80160">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
