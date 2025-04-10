import React from "react";

export const MagneticIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_69789)">
<path d="M12 3V21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 7C17.367 5.745 16.462 5 15.5 5C13.567 5 12 8.134 12 12C12 15.866 13.567 19 15.5 19C17.433 19 19 15.866 19 12V11" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 7C6.633 5.745 7.538 5 8.5 5C10.433 5 12 8.134 12 12C12 15.866 10.433 19 8.5 19C6.567 19 5 15.866 5 12V11" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 13L5 11L7 13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 13L19 11L21 13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69789">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
