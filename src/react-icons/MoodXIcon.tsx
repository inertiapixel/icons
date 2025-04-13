import React from "react";

export const MoodXIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67993)">
<path d="M20.9828 12.5562C21.0957 10.7325 20.6509 8.91764 19.7074 7.35288C18.764 5.78811 17.3666 4.54758 15.701 3.7962C14.0355 3.04481 12.1807 2.81818 10.3832 3.14642C8.58576 3.47466 6.93078 4.34223 5.63831 5.63378C4.34583 6.92534 3.47709 8.5797 3.14757 10.3769C2.81805 12.1741 3.04337 14.0291 3.79356 15.6952C4.54376 17.3613 5.7833 18.7595 7.34739 19.7041C8.91148 20.6487 10.726 21.0948 12.5498 20.9832"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 10H9.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10H15.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 15C10.158 15.64 11.06 16 12 16C12.194 16 12.386 15.985 12.574 15.955"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.5 21.5L16.5 16.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 21.5L21.5 16.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67993">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
