import React from "react";

export const HomeEcoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71734)">
<path d="M20 11L12 3L3 12H5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.325 13 13.631 13.077 13.902 13.215"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 22C16 22 16 20 19 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 21C18.2044 21 17.4413 20.6839 16.8787 20.1213C16.3161 19.5587 16 18.7956 16 18C16 17.2044 16.3161 16.4413 16.8787 15.8787C17.4413 15.3161 18.2044 15 19 15H22V18C22 18.7956 21.6839 19.5587 21.1213 20.1213C20.5587 20.6839 19.7956 21 19 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71734">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
