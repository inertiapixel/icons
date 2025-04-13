import React from "react";

export const CompassOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77992)">
<path d="M13 9L16 8L15 11M14 14L8 16L10 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0435 16.0456C20.8956 14.3545 21.1925 12.4377 20.892 10.568C20.5915 8.69838 19.709 6.97114 18.37 5.63214C17.031 4.29314 15.3037 3.4106 13.4341 3.11013C11.5645 2.80965 9.64767 3.10656 7.95654 3.95858M5.63854 5.63559C4.79148 6.46864 4.11774 7.46116 3.65617 8.5559C3.19461 9.65064 2.95437 10.8259 2.9493 12.014C2.94423 13.202 3.17444 14.3793 3.62664 15.478C4.07884 16.5766 4.74409 17.5748 5.58401 18.4151C6.42393 19.2553 7.4219 19.921 8.52036 20.3736C9.61883 20.8263 10.796 21.0569 11.9841 21.0523C13.1721 21.0477 14.3475 20.8079 15.4424 20.3468C16.5374 19.8857 17.5302 19.2123 18.3635 18.3656"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3V5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 19V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 12H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77992">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
