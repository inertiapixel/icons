import React from "react";

export const ClockXIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78412)">
<path d="M20.9263 13.1496C21.1659 11.2892 20.8182 9.40033 19.9318 7.74715C19.0454 6.09398 17.6646 4.75908 15.9824 3.92905C14.3002 3.09902 12.4007 2.81534 10.5494 3.11767C8.69815 3.42001 6.98759 4.29324 5.65686 5.6153C4.32613 6.93737 3.44175 8.64219 3.12734 10.4915C2.81292 12.3407 3.08418 14.2421 3.90321 15.9296C4.72224 17.6172 6.04809 19.0067 7.69544 19.9039C9.34279 20.801 11.2293 21.1611 13.0913 20.9336"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L14 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22L17 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 22L22 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78412">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
