import React from "react";

export const PolygonIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65872)">
<path d="M10 5C10 5.53043 10.2107 6.03914 10.5858 6.41421C10.9609 6.78929 11.4696 7 12 7C12.5304 7 13.0391 6.78929 13.4142 6.41421C13.7893 6.03914 14 5.53043 14 5C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3C11.4696 3 10.9609 3.21071 10.5858 3.58579C10.2107 3.96086 10 4.46957 10 5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 8C17 8.53043 17.2107 9.03914 17.5858 9.41421C17.9609 9.78929 18.4696 10 19 10C19.5304 10 20.0391 9.78929 20.4142 9.41421C20.7893 9.03914 21 8.53043 21 8C21 7.46957 20.7893 6.96086 20.4142 6.58579C20.0391 6.21071 19.5304 6 19 6C18.4696 6 17.9609 6.21071 17.5858 6.58579C17.2107 6.96086 17 7.46957 17 8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 11C3 11.5304 3.21071 12.0391 3.58579 12.4142C3.96086 12.7893 4.46957 13 5 13C5.53043 13 6.03914 12.7893 6.41421 12.4142C6.78929 12.0391 7 11.5304 7 11C7 10.4696 6.78929 9.96086 6.41421 9.58579C6.03914 9.21071 5.53043 9 5 9C4.46957 9 3.96086 9.21071 3.58579 9.58579C3.21071 9.96086 3 10.4696 3 11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 19C13 19.5304 13.2107 20.0391 13.5858 20.4142C13.9609 20.7893 14.4696 21 15 21C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19C17 18.4696 16.7893 17.9609 16.4142 17.5858C16.0391 17.2107 15.5304 17 15 17C14.4696 17 13.9609 17.2107 13.5858 17.5858C13.2107 17.9609 13 18.4696 13 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 9.5L10 6.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 5.5L17 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 10L16 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 17.5L6.5 12.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65872">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
