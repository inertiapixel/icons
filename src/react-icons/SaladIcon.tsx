import React from "react";

export const SaladIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64653)">
<path d="M4 11H20C20.2652 11 20.5196 11.1054 20.7071 11.2929C20.8946 11.4804 21 11.7348 21 12V12.5C21 14 18.483 18.073 17 19V20C17 20.2652 16.8946 20.5196 16.7071 20.7071C16.5196 20.8946 16.2652 21 16 21H8C7.73478 21 7.48043 20.8946 7.29289 20.7071C7.10536 20.5196 7 20.2652 7 20V19C5.313 17.946 3 14 3 12.5V12C3 11.7348 3.10536 11.4804 3.29289 11.2929C3.48043 11.1054 3.73478 11 4 11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5015 11C18.8525 9.983 18.9275 8.764 19.0015 7.286V6H16.7455C13.9155 6 12.1295 6.804 11.1055 8.076"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.255 11.008C5.11454 10.3469 5.02925 9.67524 5 9V8H6.755C7.735 8 8.556 8.124 9.234 8.35"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 8L9 4L13 6.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 11V10.5C13 9.83696 12.7366 9.20107 12.2678 8.73223C11.7989 8.26339 11.163 8 10.5 8C9.83696 8 9.20107 8.26339 8.73223 8.73223C8.26339 9.20107 8 9.83696 8 10.5V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64653">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
