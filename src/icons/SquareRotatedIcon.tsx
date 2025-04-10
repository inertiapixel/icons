import React from "react";

export const SquareRotatedIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_57332)">
<path d="M9.79463 2.89463L2.89463 9.79463C1.72263 10.9656 1.72263 13.0376 2.89463 14.2086L9.79463 21.1086C10.9656 22.2806 13.0376 22.2806 14.2086 21.1086L21.1086 14.2086C22.2806 13.0376 22.2806 10.9656 21.1086 9.79463L14.2086 2.89463C13.0376 1.72263 10.9656 1.72263 9.79463 2.89463Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57332">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
