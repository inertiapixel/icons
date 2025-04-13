import React from "react";

export const FaviconIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74468)">
<path d="M2 8C2 7.20435 2.31607 6.44129 2.87868 5.87868C3.44129 5.31607 4.20435 5 5 5H19C19.7956 5 20.5587 5.31607 21.1213 5.87868C21.6839 6.44129 22 7.20435 22 8V16C22 16.7956 21.6839 17.5587 21.1213 18.1213C20.5587 18.6839 19.7956 19 19 19H5C4.20435 19 3.44129 18.6839 2.87868 18.1213C2.31607 17.5587 2 16.7956 2 16V8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 10C10.4696 10 9.96086 10.2107 9.58579 10.5858C9.21071 10.9609 9 11.4696 9 12C9 12.5304 9.21071 13.0391 9.58579 13.4142C9.96086 13.7893 10.4696 14 11 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 12C14 12.5304 14.2107 13.0391 14.5858 13.4142C14.9609 13.7893 15.4696 14 16 14C16.5304 14 17.0391 13.7893 17.4142 13.4142C17.7893 13.0391 18 12.5304 18 12C18 11.4696 17.7893 10.9609 17.4142 10.5858C17.0391 10.2107 16.5304 10 16 10C15.4696 10 14.9609 10.2107 14.5858 10.5858C14.2107 10.9609 14 11.4696 14 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74468">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
