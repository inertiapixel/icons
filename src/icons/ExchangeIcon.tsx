import React from "react";

export const ExchangeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_74773)">
<path d="M3 18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20C5.53043 20 6.03914 19.7893 6.41421 19.4142C6.78929 19.0391 7 18.5304 7 18C7 17.4696 6.78929 16.9609 6.41421 16.5858C6.03914 16.2107 5.53043 16 5 16C4.46957 16 3.96086 16.2107 3.58579 16.5858C3.21071 16.9609 3 17.4696 3 18Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 6C17 6.53043 17.2107 7.03914 17.5858 7.41421C17.9609 7.78929 18.4696 8 19 8C19.5304 8 20.0391 7.78929 20.4142 7.41421C20.7893 7.03914 21 6.53043 21 6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4C18.4696 4 17.9609 4.21071 17.5858 4.58579C17.2107 4.96086 17 5.46957 17 6Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 8V13C19 14.3261 18.4732 15.5979 17.5355 16.5355C16.5979 17.4732 15.3261 18 14 18H11M11 18L14 15M11 18L14 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 16V11C5 9.67392 5.52678 8.40215 6.46447 7.46447C7.40215 6.52678 8.67392 6 10 6H13M13 6L10 3M13 6L10 9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74773">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
