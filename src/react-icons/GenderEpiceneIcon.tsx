import React from "react";

export const GenderEpiceneIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72987)">
<path d="M15.5367 15.5367C16.001 15.0723 16.3694 14.521 16.6207 13.9143C16.872 13.3076 17.0013 12.6574 17.0013 12.0007C17.0013 11.344 16.872 10.6937 16.6207 10.087C16.3694 9.48028 16.001 8.92901 15.5367 8.46466C15.0723 8.0003 14.521 7.63196 13.9143 7.38065C13.3076 7.12935 12.6574 7 12.0007 7C11.344 7 10.6937 7.12935 10.087 7.38065C9.48028 7.63196 8.92901 8.0003 8.46466 8.46466C7.52685 9.40246 7 10.6744 7 12.0007C7 13.3269 7.52685 14.5989 8.46466 15.5367C9.40246 16.4745 10.6744 17.0013 12.0007 17.0013C13.3269 17.0013 14.5989 16.4745 15.5367 15.5367Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5352 15.535L20.9992 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 13.9998L8.464 8.46484"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12H12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72987">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
