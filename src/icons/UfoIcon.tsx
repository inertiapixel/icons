import React from "react";

export const UfoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_60786)">
<path d="M16.95 9.01C19.97 9.749 22 11.133 22 12.724C22 15.091 17.52 17 12 17C6.48 17 2 15.091 2 12.724C2 11.134 4.04 9.739 7.07 9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 9C7 10.105 9.239 11 12 11C14.761 11 17 10.105 17 9V8.965C17 6.223 14.761 4 12 4C9.239 4 7 6.223 7 8.965V9Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 17L17 20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 17L7 20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14H12.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 13H7.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 13H17.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60786">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
