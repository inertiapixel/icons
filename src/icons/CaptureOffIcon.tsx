import React from "react";

export const CaptureOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80119)">
<path d="M4 16V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19.9992H18C18.554 19.9992 19.055 19.7742 19.417 19.4102"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.86816 9.88587C9.31427 10.4516 9.00645 11.2133 9.01179 12.0049C9.01712 12.7966 9.33519 13.5541 9.89666 14.1123C10.4581 14.6705 11.2175 14.984 12.0092 14.9847C12.8009 14.9854 13.5607 14.6731 14.1232 14.1159M14.7032 10.6999C14.4081 10.0877 13.9147 9.59321 13.3032 9.29688"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 7.99875V5.99875C4 5.45075 4.22 4.95475 4.577 4.59375"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80119">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
