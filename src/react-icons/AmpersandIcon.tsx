import React from "react";

export const AmpersandIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85874)">
<path d="M18.9991 19.9997L8.59613 9.02771C8.04452 8.47502 7.73472 7.72607 7.73472 6.94521C7.73472 6.16436 8.04452 5.4154 8.59613 4.86271C8.86919 4.58923 9.19349 4.37226 9.55049 4.22423C9.90748 4.0762 10.2902 4 10.6766 4C11.0631 4 11.4458 4.0762 11.8028 4.22423C12.1598 4.37226 12.4841 4.58923 12.7571 4.86271C13.3087 5.4154 13.6185 6.16436 13.6185 6.94521C13.6185 7.72607 13.3087 8.47502 12.7571 9.02771L8.07713 13.7147C7.38739 14.4056 7 15.342 7 16.3182C7 17.2945 7.38739 18.2308 8.07713 18.9217C8.41843 19.2634 8.82373 19.5344 9.26986 19.7194C9.71599 19.9043 10.1942 19.9995 10.6771 19.9995C11.1601 19.9995 11.6383 19.9043 12.0844 19.7194C12.5305 19.5344 12.9358 19.2634 13.2771 18.9217L18.9991 12.9997"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85874">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
