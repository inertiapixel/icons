import React from "react";

export const SquareRoot2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62846)">
<path d="M13 12H14C15 12 15 13 16.016 15.527C17 18 17 19 18 19H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 19C13.5 19 15 17 16 15.5C17 14 18.5 12 20 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12H4L7 20L10 4H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62846">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
