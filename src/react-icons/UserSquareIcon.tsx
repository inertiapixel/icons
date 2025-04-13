import React from "react";

export const UserSquareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60588)">
<path d="M9 10C9 10.7956 9.31607 11.5587 9.87868 12.1213C10.4413 12.6839 11.2044 13 12 13C12.7956 13 13.5587 12.6839 14.1213 12.1213C14.6839 11.5587 15 10.7956 15 10C15 9.20435 14.6839 8.44129 14.1213 7.87868C13.5587 7.31607 12.7956 7 12 7C11.2044 7 10.4413 7.31607 9.87868 7.87868C9.31607 8.44129 9 9.20435 9 10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 21V20C6 18.9391 6.42143 17.9217 7.17157 17.1716C7.92172 16.4214 8.93913 16 10 16H14C15.0609 16 16.0783 16.4214 16.8284 17.1716C17.5786 17.9217 18 18.9391 18 20V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60588">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
