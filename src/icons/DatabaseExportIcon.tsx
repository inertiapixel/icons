import React from "react";

export const DatabaseExportIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_76997)">
<path d="M4 6C4 7.657 7.582 9 12 9C16.418 9 20 7.657 20 6C20 4.343 16.418 3 12 3C7.582 3 4 4.343 4 6Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6V12C4 13.657 7.582 15 12 15C13.118 15 14.183 14.914 15.15 14.759" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 12V6" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12V18C4 19.657 7.582 21 12 21C12.157 21 12.312 20.998 12.466 20.995" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16L22 19L19 22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_76997">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
