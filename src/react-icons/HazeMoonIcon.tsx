import React from "react";

export const HazeMoonIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72378)">
<path d="M3 16H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 20H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.29575 16C6.02775 14.6 4.69775 11.913 5.05875 9.084C5.50175 5.604 8.36675 3.001 11.7568 3V3.006H12.0528C10.0618 4.922 9.67575 8.036 11.1348 10.411C12.5938 12.785 15.4808 13.741 17.9998 12.686C17.4538 14.0601 16.4801 15.222 15.2228 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72378">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
