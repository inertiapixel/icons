import React from "react";

export const MoodMinusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68194)">
<path d="M20.4801 15.0147C21.1277 13.1929 21.1715 11.2109 20.6048 9.36221C20.0381 7.51356 18.8911 5.89657 17.3336 4.75069C15.7762 3.60482 13.8911 2.99098 11.9576 3.0001C10.024 3.00922 8.14483 3.64079 6.59826 4.8013C5.05169 5.96181 3.91999 7.58955 3.37074 9.44346C2.82149 11.2974 2.88391 13.2789 3.54874 15.0946C4.21358 16.9102 5.44548 18.4635 7.06202 19.5244C8.67856 20.5853 10.5938 21.0973 12.5241 20.9847"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 10H9.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10H15.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 15C10.158 15.64 11.06 16 12 16C12.94 16 13.842 15.64 14.5 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68194">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
