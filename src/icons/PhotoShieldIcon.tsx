import React from "react";

export const PhotoShieldIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66464)">
<path d="M15 8H15.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 20H7C6.20435 20 5.44129 19.6839 4.87868 19.1213C4.31607 18.5587 4 17.7956 4 17V7C4 6.20435 4.31607 5.44129 4.87868 4.87868C5.44129 4.31607 6.20435 4 7 4H17C17.7956 4 18.5587 4.31607 19.1213 4.87868C19.6839 5.44129 20 6.20435 20 7V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15.0018L8 11.0018C8.928 10.1088 10.072 10.1088 11 11.0018L12.5 12.5018"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 16C22 20 19.5 22 18.5 22C17.5 22 15 20 15 16C16 16 17.5 15.5 18.5 14.5C19.5 15.5 21 16 22 16Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66464">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
