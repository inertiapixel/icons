import React from "react";

export const Number4SmallIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_67347)">
<path d="M10 8V11C10 11.2652 10.1054 11.5196 10.2929 11.7071C10.4804 11.8946 10.7348 12 11 12H14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 8V16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67347">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
