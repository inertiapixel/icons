import React from "react";

export const HomeQuestionIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71670)">
<path d="M20.136 11.136L12 3L3 12H5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.467 13 13.896 13.16 14.236 13.428"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V22.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 18.9998C19.4498 19.0011 19.8868 18.8508 20.2407 18.5732C20.5945 18.2956 20.8444 17.9068 20.95 17.4696C21.0557 17.0324 21.0109 16.5724 20.8229 16.1638C20.6349 15.7552 20.3147 15.4219 19.914 15.2178C19.5162 15.014 19.0611 14.9508 18.6228 15.0385C18.1845 15.1262 17.7888 15.3596 17.5 15.7008"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71670">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
