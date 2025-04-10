import React from "react";

export const CaneIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_80137)">
<path d="M9 20.9999L15.324 9.3099C15.864 8.3359 17.08 5.2059 13.825 3.5479C10.57 1.8909 8.65 4.4109 8 5.5799" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80137">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
