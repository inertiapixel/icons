import React from "react";

export const MoodOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_68167)">
<path d="M5.63406 5.63753C3.94675 7.3259 2.99925 9.6154 3 12.0024C3.00075 14.3893 3.94969 16.6782 5.63806 18.3655C7.32642 20.0528 9.61592 21.0003 12.0029 20.9996C14.3898 20.9988 16.6787 20.0499 18.3661 18.3615M20.0451 16.0395C20.8951 14.3491 21.1908 12.4338 20.8901 10.5658C20.5894 8.69773 19.7076 6.97197 18.37 5.63372C17.0324 4.29548 15.3071 3.41283 13.4392 3.1112C11.5713 2.80957 9.65587 3.10431 7.96506 3.95353" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 10H9.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10H15.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 15C9.82588 15.3326 10.2148 15.5968 10.6441 15.7772C11.0734 15.9576 11.5344 16.0505 12 16.0505C12.4656 16.0505 12.9266 15.9576 13.3559 15.7772C13.7852 15.5968 14.1741 15.3326 14.5 15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68167">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
