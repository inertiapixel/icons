import React from "react";

export const BuildingEstateIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80791)">
<path d="M3 21H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 21V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 17C19.5304 17 20.0391 16.7893 20.4142 16.4142C20.7893 16.0391 21 15.5304 21 15V13C21 12.4696 20.7893 11.9609 20.4142 11.5858C20.0391 11.2107 19.5304 11 19 11C18.4696 11 17.9609 11.2107 17.5858 11.5858C17.2107 11.9609 17 12.4696 17 13V15C17 15.5304 17.2107 16.0391 17.5858 16.4142C17.9609 16.7893 18.4696 17 19 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 21V7C14 6.20435 13.6839 5.44129 13.1213 4.87868C12.5587 4.31607 11.7956 4 11 4H7C6.20435 4 5.44129 4.31607 4.87868 4.87868C4.31607 5.44129 4 6.20435 4 7V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 17V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 13H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 9H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80791">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
