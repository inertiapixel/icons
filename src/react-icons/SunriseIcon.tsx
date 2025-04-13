import React from "react";

export const SunriseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62265)">
<path d="M3 17.0016H4M20 17.0016H21M5.6 10.6016L6.3 11.3016M18.4 10.6016L17.7 11.3016M8 17.0016C8 15.9407 8.42143 14.9233 9.17157 14.1731C9.92172 13.423 10.9391 13.0016 12 13.0016C13.0609 13.0016 14.0783 13.423 14.8284 14.1731C15.5786 14.9233 16 15.9407 16 17.0016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 21H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 9V3M12 3L15 6M12 3L9 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62265">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
