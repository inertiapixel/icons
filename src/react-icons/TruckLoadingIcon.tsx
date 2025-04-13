import React from "react";

export const TruckLoadingIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60861)">
<path d="M2 3H3C3.53043 3 4.03914 3.21071 4.41421 3.58579C4.78929 3.96086 5 4.46957 5 5V15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 9C9 8.20435 9.31607 7.44129 9.87868 6.87868C10.4413 6.31607 11.2044 6 12 6H16C16.7956 6 17.5587 6.31607 18.1213 6.87868C18.6839 7.44129 19 8.20435 19 9V11C19 11.7956 18.6839 12.5587 18.1213 13.1213C17.5587 13.6839 16.7956 14 16 14H12C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11V9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 19C7 19.5304 7.21071 20.0391 7.58579 20.4142C7.96086 20.7893 8.46957 21 9 21C9.53043 21 10.0391 20.7893 10.4142 20.4142C10.7893 20.0391 11 19.5304 11 19C11 18.4696 10.7893 17.9609 10.4142 17.5858C10.0391 17.2107 9.53043 17 9 17C8.46957 17 7.96086 17.2107 7.58579 17.5858C7.21071 17.9609 7 18.4696 7 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19C16 19.5304 16.2107 20.0391 16.5858 20.4142C16.9609 20.7893 17.4696 21 18 21C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19C20 18.4696 19.7893 17.9609 19.4142 17.5858C19.0391 17.2107 18.5304 17 18 17C17.4696 17 16.9609 17.2107 16.5858 17.5858C16.2107 17.9609 16 18.4696 16 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60861">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
