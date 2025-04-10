import React from "react";

export const ListNumbersIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_70354)">
<path d="M11 6H20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 12H20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18H20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 16C4 15.4696 4.21071 14.9609 4.58579 14.5858C4.96086 14.2107 5.46957 14 6 14C6.53043 14 7.03914 14.2107 7.41421 14.5858C7.78929 14.9609 8 15.4696 8 16C8 16.591 7.5 17 7 17.5L4 20H8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10V4L4 6" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70354">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
