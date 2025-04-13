import React from "react";

export const DirectionSignOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75346)">
<path d="M18.7294 14.7234L20.6784 12.7734C20.8836 12.5681 20.9989 12.2897 20.9989 11.9994C20.9989 11.7092 20.8836 11.4308 20.6784 11.2254L12.7734 3.32044C12.5681 3.11526 12.2897 3 11.9994 3C11.7092 3 11.4308 3.11526 11.2254 3.32044L9.27544 5.27044M7.26544 7.28044L3.32044 11.2254C3.11526 11.4308 3 11.7092 3 11.9994C3 12.2897 3.11526 12.5681 3.32044 12.7734L11.2254 20.6784C11.6524 21.1064 12.3454 21.1064 12.7734 20.6784L16.7234 16.7284"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.748 13.7539L12 15.5019"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75346">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
