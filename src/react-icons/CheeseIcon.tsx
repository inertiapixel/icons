import React from "react";

export const CheeseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79529)">
<path d="M4.51834 20.008L20.9993 20V16.5C20.4689 16.5 19.9602 16.2893 19.5851 15.9142C19.2101 15.5391 18.9993 15.0304 18.9993 14.5C18.9993 13.9696 19.2101 13.4609 19.5851 13.0858C19.9602 12.7107 20.4689 12.5 20.9993 12.5V9H4.27734"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 8.99981L11.615 4.00781C9.103 4.12781 6.857 5.42781 5.288 7.43281C3.865 9.25281 3 11.6538 3 14.2868C3 16.4038 3.56 18.3718 4.519 20.0078"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 13V13.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 13V13.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 16V16.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79529">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
