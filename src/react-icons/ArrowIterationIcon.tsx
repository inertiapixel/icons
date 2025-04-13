import React from "react";

export const ArrowIterationIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85372)">
<path d="M8.5 16C9.5878 16 10.6512 15.6774 11.5556 15.0731C12.4601 14.4687 13.1651 13.6098 13.5813 12.6048C13.9976 11.5998 14.1065 10.4939 13.8943 9.42701C13.6821 8.36011 13.1583 7.3801 12.3891 6.61092C11.6199 5.84173 10.6399 5.3179 9.573 5.10568C8.5061 4.89346 7.40023 5.00238 6.39524 5.41867C5.39025 5.83495 4.53126 6.5399 3.92692 7.44437C3.32257 8.34884 3 9.41221 3 10.5V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 16H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 13L21 16L18 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85372">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
