import React from "react";

export const ChessBishop1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79506)">
<path d="M8 16L6.553 16.724C6.38692 16.807 6.24722 16.9346 6.14955 17.0925C6.05188 17.2504 6.0001 17.4323 6 17.618V20H18V17.618C17.9999 17.4323 17.9481 17.2504 17.8504 17.0925C17.7528 16.9346 17.6131 16.807 17.447 16.724L16 16H8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 4C11 4.26522 11.1054 4.51957 11.2929 4.70711C11.4804 4.89464 11.7348 5 12 5C12.2652 5 12.5196 4.89464 12.7071 4.70711C12.8946 4.51957 13 4.26522 13 4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3C11.7348 3 11.4804 3.10536 11.2929 3.29289C11.1054 3.48043 11 3.73478 11 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 16C7.833 16 7 14.331 7 13C7 9.333 8.667 7 12 6C15.333 7 17 9.427 17 13C17 14.284 16.225 15.881 14.675 16H14.5H9.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 8L12 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79506">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
