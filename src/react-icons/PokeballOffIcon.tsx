import React from "react";

export const PokeballOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65918)">
<path d="M20.0385 16.0469C20.8907 14.3561 21.1879 12.4396 20.8879 10.57C20.5879 8.70052 19.7059 6.97324 18.3674 5.63399C17.0289 4.29473 15.3022 3.41173 13.4328 3.11063C11.5635 2.80953 9.64677 3.10567 7.95546 3.95691M5.63546 5.63491C3.94882 7.32394 3.00222 9.61381 3.00391 12.0008C3.0056 14.3877 3.95543 16.6763 5.64446 18.3629C7.33349 20.0496 9.62336 20.9961 12.0103 20.9945C14.3973 20.9928 16.6858 20.0429 18.3725 18.3539"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.88416 9.87406C9.32111 10.4363 9.00447 11.1992 9.00391 11.9949C9.00334 12.7907 9.3189 13.554 9.88116 14.1171C10.4434 14.6801 11.2063 14.9968 12.002 14.9973C12.7978 14.9979 13.5611 14.6823 14.1242 14.1201M14.6942 10.6791C14.3942 10.0701 13.8974 9.58027 13.2842 9.28906"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12H9M16 12H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65918">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
