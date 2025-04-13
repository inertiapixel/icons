import React from "react";

export const FilterQuestionIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73744)">
<path d="M15 19L9 21V12.5L4.52 7.572C4.18545 7.20393 4.00005 6.7244 4 6.227V4H20V6.172C19.9999 6.70239 19.7891 7.21101 19.414 7.586L15 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V22.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 18.9998C19.4483 18.9983 19.8832 18.8466 20.235 18.5687C20.5868 18.2909 20.8352 17.903 20.9406 17.4673C21.0459 17.0315 21.0019 16.5731 20.8158 16.1652C20.6297 15.7574 20.3122 15.4238 19.914 15.2178C19.5162 15.014 19.0611 14.9508 18.6228 15.0385C18.1845 15.1262 17.7888 15.3596 17.5 15.7008"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73744">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
