import React from "react";

export const BuildingBridgeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_80848)">
<path d="M6 5V19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 5V19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 15H22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 8C4.14775 7.5872 5.17751 6.90069 6 6C6.49356 7.18455 7.32671 8.1965 8.39445 8.90833C9.46219 9.62015 10.7167 10 12 10C13.2833 10 14.5378 9.62015 15.6056 8.90833C16.6733 8.1965 17.5064 7.18455 18 6C18.8225 6.90069 19.8522 7.5872 21 8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 10V15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80848">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
