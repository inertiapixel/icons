import React from "react";

export const ServicemarkIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_64290)">
<path d="M9 9H6.5C6.10218 9 5.72064 9.15804 5.43934 9.43934C5.15804 9.72064 5 10.1022 5 10.5C5 10.8978 5.15804 11.2794 5.43934 11.5607C5.72064 11.842 6.10218 12 6.5 12H7.5C7.89782 12 8.27936 12.158 8.56066 12.4393C8.84196 12.7206 9 13.1022 9 13.5C9 13.8978 8.84196 14.2794 8.56066 14.5607C8.27936 14.842 7.89782 15 7.5 15H5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 15V9L16 13L19 9V15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64290">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
