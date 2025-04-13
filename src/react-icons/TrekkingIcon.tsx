import React from "react";

export const TrekkingIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60967)">
<path d="M11 4C11 4.26522 11.1054 4.51957 11.2929 4.70711C11.4804 4.89464 11.7348 5 12 5C12.2652 5 12.5196 4.89464 12.7071 4.70711C12.8946 4.51957 13 4.26522 13 4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3C11.7348 3 11.4804 3.10536 11.2929 3.29289C11.1054 3.48043 11 3.73478 11 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 21L9 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 21V17L10 14L11 8L14 12L17 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.99913 14L8.17213 12.782C7.82873 12.5531 7.56452 12.2237 7.41575 11.8388C7.26697 11.4538 7.24091 11.0323 7.34113 10.632L7.62113 9.515C7.72924 9.08249 7.97876 8.6985 8.33006 8.42401C8.68137 8.14953 9.11431 8.00029 9.56013 8H10.9991L14.9991 9L17.9991 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 12V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 20H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60967">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
