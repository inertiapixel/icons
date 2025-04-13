import React from "react";

export const SunOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62294)">
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.0002 12C16.0002 10.9391 15.5788 9.92172 14.8286 9.17157C14.0785 8.42143 13.0611 8 12.0002 8M9.1662 9.177C8.41643 9.92756 7.99553 10.9452 7.99609 12.0061C7.99666 13.067 8.41863 14.0842 9.1692 14.834C9.91976 15.5838 10.9374 16.0047 11.9983 16.0041C13.0592 16.0035 14.0764 15.5816 14.8262 14.831"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12H4M12 3V4M20 12H21M12 20V21M5.6 5.6L6.3 6.3M18.4 5.6L17.7 6.3M17.7 17.7L18.4 18.4M6.3 17.7L5.6 18.4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62294">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
