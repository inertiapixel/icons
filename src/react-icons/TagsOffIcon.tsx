import React from "react";

export const TagsOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62042)">
<path d="M16.2959 12.2959L10.5859 6.58594"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V12.172C3.00011 12.7024 3.2109 13.211 3.586 13.586L9.296 19.296C9.74795 19.7479 10.3609 20.0017 11 20.0017C11.6391 20.0017 12.252 19.7479 12.704 19.296L15.982 16.018"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 18.9999L18.496 18.5039"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.384 16.367C20.9003 15.4499 21.1024 14.389 20.9594 13.3463C20.8164 12.3036 20.3362 11.3363 19.592 10.592L15 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.99828 10H6.98828"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62042">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
