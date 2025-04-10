import React from "react";

export const Number3SmallIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_67355)">
<path d="M10 8H12.5C12.8978 8 13.2794 8.15804 13.5607 8.43934C13.842 8.72064 14 9.10218 14 9.5V10.5C14 10.8978 13.842 11.2794 13.5607 11.5607C13.2794 11.842 12.8978 12 12.5 12M12.5 12H11M12.5 12C12.8978 12 13.2794 12.158 13.5607 12.4393C13.842 12.7206 14 13.1022 14 13.5V14.5C14 14.8978 13.842 15.2794 13.5607 15.5607C13.2794 15.842 12.8978 16 12.5 16H10" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67355">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
