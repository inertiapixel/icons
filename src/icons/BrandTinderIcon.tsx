import React from "react";

export const BrandTinderIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81353)">
<path d="M18.9177 8.174C21.4777 13.156 19.4187 19.83 13.5377 20.8C5.83566 22.487 0.697663 13.084 6.48366 7.571C6.79266 7.266 7.64466 6.476 7.99966 6.222C7.99966 6.75 8.26966 9.697 8.99966 9.389C11.9997 9.389 12.9997 5.167 12.5867 2C15.2867 3.411 17.5737 5.376 18.9177 8.174Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81353">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
