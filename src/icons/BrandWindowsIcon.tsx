import React from "react";

export const BrandWindowsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_81169)">
<path d="M17.8 19.9998L5.8 18.4998C4.8 18.3998 4 17.5998 4 16.5998V7.39979C4 6.39979 4.8 5.59979 5.8 5.49979L17.8 3.99979C19 3.89979 20 4.79979 20 5.89979V17.9998C20 19.1998 18.9 20.0998 17.8 19.8998V19.9998Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5V19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12H20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81169">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
