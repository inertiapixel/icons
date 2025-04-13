import React from "react";

export const IceCreamOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71461)">
<path d="M12 21.5V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 8.00025V17.0003H16V16.0003M16 12.0003V7.00025C16.0001 6.14949 15.7289 5.32087 15.2258 4.63478C14.7227 3.94868 14.014 3.44085 13.2026 3.18507C12.3912 2.92928 11.5194 2.93887 10.7138 3.21242C9.90824 3.48598 9.21086 4.00927 8.723 4.70625"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 10.5L9.74 9.74M12.53 8.518L16 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 14.4992L12.488 12.5352"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71461">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
