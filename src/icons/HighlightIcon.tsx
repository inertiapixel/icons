import React from "react";

export const HighlightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_71805)">
<path d="M3 19.0003H7L17.5 8.5003C18.0304 7.96987 18.3284 7.25045 18.3284 6.5003C18.3284 5.75016 18.0304 5.03074 17.5 4.5003C16.9696 3.96987 16.2501 3.67188 15.5 3.67188C14.7499 3.67188 14.0304 3.96987 13.5 4.5003L3 15.0003V19.0003Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 5.5L16.5 9.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 13.5L8.5 17.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 15V19H13L17 15H21Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71805">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
