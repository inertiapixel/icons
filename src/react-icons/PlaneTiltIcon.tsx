import React from "react";

export const PlaneTiltIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66267)">
<path d="M14.5 6.50061L17.5 3.60061C17.8846 3.21605 18.4061 3 18.95 3C19.4939 3 20.0154 3.21605 20.4 3.60061C20.7846 3.98517 21.0006 4.50675 21.0006 5.05061C21.0006 5.59447 20.7846 6.11605 20.4 6.50061L17.5 9.50061L20 17.0006L17.5 19.5506L14 13.0006L11 16.0006V19.0006L9 21.0006L7.5 16.5006L3 15.0006L5 13.0006H8L11 10.0006L4.5 6.50061L7 4.00061L14.5 6.50061Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66267">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
