import React from "react";

export const VideoOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60359)">
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10.9987V9.99865L19.553 7.72265C19.7054 7.64649 19.8748 7.61053 20.045 7.6182C20.2152 7.62587 20.3806 7.6769 20.5256 7.76646C20.6706 7.85602 20.7902 7.98113 20.8733 8.12993C20.9563 8.27872 20.9999 8.44626 21 8.61665V15.3807C21.0001 15.589 20.935 15.7922 20.814 15.9618C20.693 16.1314 20.522 16.2589 20.325 16.3267"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 6H13C13.5304 6 14.0391 6.21071 14.4142 6.58579C14.7893 6.96086 15 7.46957 15 8V11M15 15V16C15 16.5304 14.7893 17.0391 14.4142 17.4142C14.0391 17.7893 13.5304 18 13 18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60359">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
