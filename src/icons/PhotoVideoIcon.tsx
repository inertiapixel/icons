import React from "react";

export const PhotoVideoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_66437)">
<path d="M9 15H6C5.20435 15 4.44129 14.6839 3.87868 14.1213C3.31607 13.5587 3 12.7956 3 12V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H12C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6V9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9H18C18.7956 9 19.5587 9.31607 20.1213 9.87868C20.6839 10.4413 21 11.2044 21 12V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H12C11.2044 21 10.4413 20.6839 9.87868 20.1213C9.31607 19.5587 9 18.7956 9 18V12Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12.0017L5.296 9.70575C5.74795 9.25386 6.36089 9 7 9C7.63911 9 8.25205 9.25386 8.704 9.70575L9 10.0017" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 13.5V16.5L16.5 15L14 13.5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 6V6.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66437">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
