import React from "react";

export const RubberStampOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64770)">
<path d="M8.273 8.27344C9.078 10.6144 11.13 13.8004 6.789 13.8004C4.421 13.8004 3 13.8004 3 17.8504H17.85"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 21H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.71094 4.722C9.07846 4.19005 9.56975 3.75538 10.1425 3.45541C10.7153 3.15543 11.3524 2.99915 11.9989 3C13.0598 3 14.0772 3.42143 14.8274 4.17158C15.5775 4.92172 15.9989 5.93914 15.9989 7C15.9989 7.992 15.1929 9.464 14.7759 10.785M20.9739 16.981C20.7919 14.098 19.6419 13.828 17.8019 13.803"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64770">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
