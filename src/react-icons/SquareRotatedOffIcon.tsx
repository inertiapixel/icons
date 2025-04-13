import React from "react";

export const SquareRotatedOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62831)">
<path d="M16.9642 16.9521L13.5022 20.4131C12.7202 21.1961 11.2802 21.1961 10.5022 20.4131L3.59116 13.5031C2.80816 12.7201 2.80816 11.2801 3.59116 10.5031L7.04616 7.04706M9.04616 5.04706L10.4992 3.59506C11.2812 2.81206 12.7212 2.81206 13.4992 3.59506L20.4102 10.5051C21.1932 11.2881 21.1932 12.7281 20.4102 13.5051L18.9622 14.9551"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62831">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
