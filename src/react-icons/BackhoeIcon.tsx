import React from "react";

export const BackhoeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84558)">
<path d="M2 17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19C4.53043 19 5.03914 18.7893 5.41421 18.4142C5.78929 18.0391 6 17.5304 6 17C6 16.4696 5.78929 15.9609 5.41421 15.5858C5.03914 15.2107 4.53043 15 4 15C3.46957 15 2.96086 15.2107 2.58579 15.5858C2.21071 15.9609 2 16.4696 2 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 17C11 17.5304 11.2107 18.0391 11.5858 18.4142C11.9609 18.7893 12.4696 19 13 19C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17C15 16.4696 14.7893 15.9609 14.4142 15.5858C14.0391 15.2107 13.5304 15 13 15C12.4696 15 11.9609 15.2107 11.5858 15.5858C11.2107 15.9609 11 16.4696 11 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 19H4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12V7H10C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 15V13C5 12.7348 5.10536 12.4804 5.29289 12.2929C5.48043 12.1054 5.73478 12 6 12H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.12 9.88L18 5L13 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.1189 9.87891C21.5379 10.2985 21.8232 10.8328 21.9388 11.4144C22.0543 11.996 21.9949 12.5987 21.7681 13.1466C21.5412 13.6945 21.1571 14.1628 20.6642 14.4925C20.1714 14.8222 19.5919 14.9984 18.9989 14.9989C18.2035 14.9982 17.441 14.6817 16.8789 14.1189L21.1189 9.87891Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84558">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
