import React from "react";

export const EarScanIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74967)">
<path d="M15 15.0015C15 15.532 14.7893 16.0407 14.4142 16.4157C14.0391 16.7908 13.5304 17.0015 13 17.0015C12.268 17.0015 11.445 16.7545 11.28 16.0215C10.646 13.2215 8.11 13.3935 8 11.0015V10.5015C7.99965 9.70498 8.27102 8.93214 8.76929 8.31066C9.26755 7.68919 9.9629 7.25627 10.7405 7.08341C11.518 6.91055 12.3313 7.0081 13.046 7.35994C13.7606 7.71177 14.3338 8.29686 14.671 9.01853"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 8V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 16V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 12V12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74967">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
