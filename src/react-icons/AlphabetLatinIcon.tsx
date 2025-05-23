import React from "react";

export const AlphabetLatinIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85890)">
<path d="M6 10H8C8.53043 10 9.03914 10.2107 9.41421 10.5858C9.78929 10.9609 10 11.4696 10 12V17H7C6.46957 17 5.96086 16.7893 5.58579 16.4142C5.21071 16.0391 5 15.5304 5 15C5 14.4696 5.21071 13.9609 5.58579 13.5858C5.96086 13.2107 6.46957 13 7 13H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 7V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 12C14 11.4696 14.2107 10.9609 14.5858 10.5858C14.9609 10.2107 15.4696 10 16 10H17C17.5304 10 18.0391 10.2107 18.4142 10.5858C18.7893 10.9609 19 11.4696 19 12V15C19 15.5304 18.7893 16.0391 18.4142 16.4142C18.0391 16.7893 17.5304 17 17 17H16C15.4696 17 14.9609 16.7893 14.5858 16.4142C14.2107 16.0391 14 15.5304 14 15V12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85890">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
