import React from "react";

export const JpgIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71186)">
<path d="M21 8H19C18.4696 8 17.9609 8.21071 17.5858 8.58579C17.2107 8.96086 17 9.46957 17 10V14C17 14.5304 17.2107 15.0391 17.5858 15.4142C17.9609 15.7893 18.4696 16 19 16H21V12H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16V8H12C12.5304 8 13.0391 8.21071 13.4142 8.58579C13.7893 8.96086 14 9.46957 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 8H7V14C7 14.5304 6.78929 15.0391 6.41421 15.4142C6.03914 15.7893 5.53043 16 5 16H3.5C3.36739 16 3.24021 15.9473 3.14645 15.8536C3.05268 15.7598 3 15.6326 3 15.5V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71186">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
