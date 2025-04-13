import React from "react";

export const PyramidIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65637)">
<path d="M11.1057 21.788C11.3833 21.9274 11.6896 21.9999 12.0002 21.9999C12.3108 21.9999 12.6171 21.9274 12.8947 21.788L20.9867 17.734C21.5247 17.464 21.7047 16.783 21.3717 16.282L12.8317 2.44603C12.7406 2.30886 12.6169 2.19636 12.4717 2.11854C12.3266 2.04072 12.1644 2 11.9997 2C11.835 2 11.6729 2.04072 11.5277 2.11854C11.3826 2.19636 11.2589 2.30886 11.1677 2.44603L2.62774 16.282C2.54943 16.4004 2.49708 16.534 2.47414 16.6741C2.45121 16.8142 2.4582 16.9575 2.49467 17.0947C2.53114 17.2319 2.59625 17.3598 2.68572 17.47C2.77518 17.5802 2.88698 17.6702 3.01374 17.734L11.1057 21.788Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65637">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
