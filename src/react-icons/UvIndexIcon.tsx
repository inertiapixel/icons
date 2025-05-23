import React from "react";

export const UvIndexIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60534)">
<path d="M3 12.0016H4M20 12.0016H21M5.6 5.60156L6.3 6.30156M18.4 5.60156L17.7 6.30156M8 12.0016C8 10.9407 8.42143 9.92328 9.17157 9.17314C9.92172 8.42299 10.9391 8.00156 12 8.00156C13.0609 8.00156 14.0783 8.42299 14.8284 9.17314C15.5786 9.92328 16 10.9407 16 12.0016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 16L15 21H16L18 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 16V19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21C8.53043 21 9.03914 20.7893 9.41421 20.4142C9.78929 20.0391 10 19.5304 10 19V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60534">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
