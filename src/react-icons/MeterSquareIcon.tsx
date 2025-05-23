import React from "react";

export const MeterSquareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68493)">
<path d="M17 5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6V7C20 7.26522 19.8946 7.51957 19.7071 7.70711C19.5196 7.89464 19.2652 8 19 8H18C17.7348 8 17.4804 8.10536 17.2929 8.29289C17.1054 8.48043 17 8.73478 17 9V10C17 10.2652 17.1054 10.5196 17.2929 10.7071C17.4804 10.8946 17.7348 11 18 11H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 14C4 13.4696 4.21071 12.9609 4.58579 12.5858C4.96086 12.2107 5.46957 12 6 12H6.5C7.16304 12 7.79893 12.2634 8.26777 12.7322C8.73661 13.2011 9 13.837 9 14.5V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 15.5V14.5C9 13.837 9.26339 13.2011 9.73223 12.7322C10.2011 12.2634 10.837 12 11.5 12C12.163 12 12.7989 12.2634 13.2678 12.7322C13.7366 13.2011 14 13.837 14 14.5V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68493">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
