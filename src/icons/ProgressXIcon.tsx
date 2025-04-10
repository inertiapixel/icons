import React from "react";

export const ProgressXIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_65708)">
<path d="M9.99953 20.7776C9.12914 20.5802 8.29321 20.2535 7.51953 19.8086" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 3.22266C15.9882 3.67673 17.7632 4.79235 19.0347 6.38686C20.3061 7.98138 20.9984 9.96031 20.9984 11.9997C20.9984 14.039 20.3061 16.0179 19.0347 17.6125C17.7632 19.207 15.9882 20.3226 14 20.7767" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.57856 17.092C4.03307 16.2995 3.61876 15.4243 3.35156 14.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.125 10.4995C3.285 9.54953 3.593 8.64953 4.025 7.82453L4.194 7.51953" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.90625 4.57866C7.8419 3.93456 8.89157 3.47437 9.99925 3.22266" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 14L10 10" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 14L14 10" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65708">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
