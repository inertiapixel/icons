import React from "react";

export const CylinderOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_77061)">
<path d="M5.23 5.233C5.08 5.478 5 5.735 5 6C5 7.131 6.461 8.117 8.62 8.628M12.977 8.971C16.381 8.767 19 7.515 19 6C19 4.343 15.866 3 12 3C10.355 3 8.842 3.243 7.647 3.65" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 6V18C5 19.657 8.134 21 12 21C15.245 21 17.974 20.054 18.767 18.77M19 15V6" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77061">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
