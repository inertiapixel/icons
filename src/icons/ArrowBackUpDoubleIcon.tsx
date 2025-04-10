import React from "react";

export const ArrowBackUpDoubleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_85623)">
<path d="M13 14L9 10L13 6" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 14L4 10L8 6" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 10H16C17.0609 10 18.0783 10.4214 18.8284 11.1716C19.5786 11.9217 20 12.9391 20 14C20 15.0609 19.5786 16.0783 18.8284 16.8284C18.0783 17.5786 17.0609 18 16 18H15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85623">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
