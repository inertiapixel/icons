import React from "react";

export const PhotoXIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66429)">
<path d="M15 8H15.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 16.0018L8 11.0018C8.928 10.1088 10.072 10.1088 11 11.0018L14 14.0018"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 14.0018L15 13.0018C15.928 12.1088 17.072 12.1088 18 13.0018"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22L17 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 22L22 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66429">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
