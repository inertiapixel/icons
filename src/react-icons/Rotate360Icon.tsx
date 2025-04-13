import React from "react";

export const Rotate360Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64907)">
<path d="M12 16H16V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.458 11.0417C20.318 8.67574 20.18 6.46174 18.858 5.14174C16.586 2.86774 11.673 4.09674 7.88503 7.88474C4.09703 11.6727 2.86803 16.5857 5.14103 18.8587C7.36803 21.0847 12.128 19.9517 15.881 16.3437"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64907">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
