import React from "react";

export const AxisYIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84588)">
<path d="M10.9983 20H10.9883"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.9983 20H14.9883"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.9983 20H18.9883"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 7L7 4L10 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 20V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84588">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
