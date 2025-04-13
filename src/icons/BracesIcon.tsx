import React from "react";

export const BracesIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82944)">
<path d="M7 4C6.46957 4 5.96086 4.21071 5.58579 4.58579C5.21071 4.96086 5 5.46957 5 6V9C5 9.79565 4.78929 10.5587 4.41421 11.1213C4.03914 11.6839 3.53043 12 3 12C3.53043 12 4.03914 12.3161 4.41421 12.8787C4.78929 13.4413 5 14.2044 5 15V18C5 18.5304 5.21071 19.0391 5.58579 19.4142C5.96086 19.7893 6.46957 20 7 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 4C17.5304 4 18.0391 4.21071 18.4142 4.58579C18.7893 4.96086 19 5.46957 19 6V9C19 9.79565 19.2107 10.5587 19.5858 11.1213C19.9609 11.6839 20.4696 12 21 12C20.4696 12 19.9609 12.3161 19.5858 12.8787C19.2107 13.4413 19 14.2044 19 15V18C19 18.5304 18.7893 19.0391 18.4142 19.4142C18.0391 19.7893 17.5304 20 17 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82944">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
