import React from "react";

export const BrandNexoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_81867)">
<path d="M17 3L22 6V18L17 21L7 15V9L17 15V9L12 6L17 3Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6L7 3L2 6V18L7 21L11.7 17.87" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81867">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
