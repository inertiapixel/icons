import React from "react";

export const HemisphereOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72104)">
<path d="M6.588 6.603C4.41 7.15 3 8.02 3 9C3 10.657 7.03 12 12 12M15.72 11.733C18.834 11.26 21 10.215 21 9C21 7.343 16.97 6 12 6C11.338 6 10.692 6.024 10.07 6.07"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 9C2.99988 10.5973 3.42488 12.1659 4.23136 13.5447C5.03784 14.9235 6.19675 16.0628 7.58909 16.8457C8.98143 17.6285 10.557 18.0267 12.1541 17.9994C13.7512 17.972 15.3123 17.5201 16.677 16.69M18.842 14.847C20.2375 13.2188 21.0031 11.1444 21 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72104">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
