import React from "react";

export const NavigationSouthIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67614)">
<path d="M10 8.25C10 8.664 10.336 9 10.75 9H13C13.2652 9 13.5196 8.89464 13.7071 8.70711C13.8946 8.51957 14 8.26522 14 8V7C14 6.73478 13.8946 6.48043 13.7071 6.29289C13.5196 6.10536 13.2652 6 13 6H11C10.7348 6 10.4804 5.89464 10.2929 5.70711C10.1054 5.51957 10 5.26522 10 5V4C10 3.73478 10.1054 3.48043 10.2929 3.29289C10.4804 3.10536 10.7348 3 11 3H13.25C13.4489 3 13.6397 3.07902 13.7803 3.21967C13.921 3.36032 14 3.55109 14 3.75"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 21L12 13L8 21L12 19L16 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67614">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
