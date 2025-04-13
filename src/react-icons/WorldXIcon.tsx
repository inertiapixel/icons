import React from "react";

export const WorldXIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59543)">
<path d="M20.9287 13.131C21.1584 11.3173 20.8303 9.47654 19.9881 7.85385C19.1458 6.23116 17.8294 4.90346 16.2139 4.04745C14.5984 3.19145 12.7606 2.84774 10.9449 3.06207C9.12927 3.2764 7.42196 4.0386 6.05021 5.24723C4.67846 6.45587 3.70733 8.05361 3.26607 9.82781C2.82481 11.602 2.93435 13.4685 3.58012 15.1789C4.22588 16.8893 5.37723 18.3625 6.88094 19.4024C8.38466 20.4423 10.1694 20.9995 11.9977 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 9H20.4016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 15H13.5016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4997 3C9.81501 5.69961 8.92188 8.81787 8.92188 12C8.92188 15.1821 9.81501 18.3004 11.4997 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 3C14.4697 6.15517 15.3497 9.86949 15.005 13.573"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22L17 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 22L22 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59543">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
