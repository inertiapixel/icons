import React from "react";

export const ClockMinusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78490)">
<path d="M20.4774 15.0222C21.1262 13.2024 21.1721 11.2222 20.6084 9.37422C20.0448 7.52628 18.9014 5.90878 17.3474 4.76087C15.7934 3.61296 13.9113 2.99558 11.9793 3.00002C10.0473 3.00446 8.16806 3.63048 6.61936 4.78552C5.07066 5.94056 3.93475 7.5633 3.37958 9.41381C2.82442 11.2643 2.87946 13.2443 3.53659 15.0612C4.19371 16.878 5.41803 18.4351 7.02851 19.5023C8.63899 20.5695 10.5501 21.0901 12.4794 20.9872"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L15 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78490">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
