import React from "react";

export const ClockShareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_78439)">
<path d="M20.9425 13.016C21.1484 11.203 20.7985 9.37034 19.9391 7.76084C19.0797 6.15133 17.7514 4.84105 16.1303 4.00371C14.5092 3.16637 12.6719 2.84153 10.8619 3.07225C9.052 3.30297 7.35494 4.07836 5.99575 5.29561C4.63656 6.51286 3.67944 8.11448 3.25129 9.88811C2.82315 11.6617 2.94419 13.5236 3.59839 15.2269C4.25258 16.9302 5.40901 18.3944 6.91437 19.4254C8.41973 20.4564 10.2029 21.0055 12.0275 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 22L21 17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 21.5V17H16.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L14 14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78439">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
