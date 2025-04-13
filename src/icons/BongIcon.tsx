import React from "react";

export const BongIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83588)">
<path d="M12.9996 3V11.416C13.1336 11.475 13.2646 11.539 13.3926 11.609L16.9996 8L18.9996 10L15.3916 13.608C15.8732 14.4928 16.0763 15.5025 15.9743 16.5047C15.8723 17.507 15.4699 18.455 14.8199 19.2246C14.1698 19.9943 13.3025 20.5496 12.3315 20.8179C11.3604 21.0861 10.331 21.0548 9.37808 20.728C8.42514 20.4012 7.59315 19.7942 6.9911 18.9865C6.38906 18.1788 6.04504 17.208 6.00413 16.2015C5.96321 15.1949 6.22731 14.1994 6.76182 13.3455C7.29633 12.4916 8.07632 11.819 8.99959 11.416V3H12.9996Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 3H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.10156 17H15.9016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83588">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
