import React from "react";

export const Plant2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66240)">
<path d="M2 9C2 11.6522 3.05357 14.1957 4.92893 16.0711C6.8043 17.9464 9.34784 19 12 19C14.6522 19 17.1957 17.9464 19.0711 16.0711C20.9464 14.1957 22 11.6522 22 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 19C12 16.3478 13.0536 13.8043 14.9289 11.9289C16.8043 10.0536 19.3478 9 22 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9C3.31322 9 4.61358 9.25866 5.82683 9.7612C7.04009 10.2638 8.14248 11.0003 9.07107 11.9289C9.99965 12.8575 10.7362 13.9599 11.2388 15.1732C11.7413 16.3864 12 17.6868 12 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4C13.0078 4.96205 13.7965 6.12992 14.3124 7.42412C14.8284 8.71832 15.0595 10.1085 14.99 11.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.00816 11.5C8.93868 10.1085 9.16978 8.71832 9.68573 7.42412C10.2017 6.12992 10.9904 4.96205 11.9982 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66240">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
