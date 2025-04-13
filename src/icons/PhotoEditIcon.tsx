import React from "react";

export const PhotoEditIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66587)">
<path d="M15 8H15.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 20H7C6.20435 20 5.44129 19.6839 4.87868 19.1213C4.31607 18.5587 4 17.7956 4 17V7C4 6.20435 4.31607 5.44129 4.87868 4.87868C5.44129 4.31607 6.20435 4 7 4H17C17.7956 4 18.5587 4.31607 19.1213 4.87868C19.6839 5.44129 20 6.20435 20 7V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15.0018L8 11.0018C8.928 10.1088 10.072 10.1088 11 11.0018L14 14.0018"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 13.9983L15 12.9983C15.31 12.7003 15.644 12.5013 15.987 12.4023"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.42 15.6112C18.615 15.4162 18.8465 15.2615 19.1013 15.156C19.3561 15.0504 19.6292 14.9961 19.905 14.9961C20.1808 14.9961 20.4539 15.0504 20.7087 15.156C20.9635 15.2615 21.195 15.4162 21.39 15.6112C21.585 15.8062 21.7397 16.0377 21.8452 16.2925C21.9508 16.5473 22.0051 16.8204 22.0051 17.0962C22.0051 17.372 21.9508 17.6451 21.8452 17.8999C21.7397 18.1547 21.585 18.3862 21.39 18.5812L18 22.0012H15V19.0012L18.42 15.6112Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66587">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
