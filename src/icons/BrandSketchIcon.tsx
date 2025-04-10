import React from "react";

export const BrandSketchIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_81577)">
<path d="M3.26196 10.8779L11.262 19.6669C11.662 20.1069 12.353 20.1069 12.753 19.6669L20.753 10.8769C21.066 10.5329 21.102 10.0179 20.84 9.63391L17.303 4.43991C17.2114 4.30591 17.0887 4.1962 16.9453 4.12024C16.8019 4.04429 16.6422 4.00436 16.48 4.00391H7.55395C7.39169 4.00436 7.23198 4.04429 7.0886 4.12024C6.94521 4.1962 6.82247 4.30591 6.73095 4.43991L3.19095 9.63191C2.92795 10.0169 2.96396 10.5329 3.27796 10.8779H3.26196Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81577">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
