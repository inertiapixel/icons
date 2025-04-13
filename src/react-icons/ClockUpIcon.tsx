import React from "react";

export const ClockUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78418)">
<path d="M20.9833 12.5482C21.0945 10.7254 20.6486 8.91198 19.7049 7.34864C18.7611 5.78529 17.3641 4.54603 15.6993 3.79542C14.0346 3.04482 12.1809 2.81839 10.3844 3.1462C8.58792 3.47402 6.93367 4.34057 5.64132 5.63077C4.34898 6.92097 3.47969 8.57379 3.1489 10.3697C2.8181 12.1656 3.04146 14.0197 3.7893 15.6857C4.53714 17.3517 5.77409 18.7508 7.33587 19.6971C8.89765 20.6435 10.7104 21.0924 12.5333 20.9842"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 19L19 16L16 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L14.5 14.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78418">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
