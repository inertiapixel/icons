import React from "react";

export const Book1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83556)">
<path d="M3 18.9987C4.36817 18.2088 5.92017 17.793 7.5 17.793C9.07983 17.793 10.6318 18.2088 12 18.9987C13.3682 18.2088 14.9202 17.793 16.5 17.793C18.0798 17.793 19.6318 18.2088 21 18.9987"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 5.99874C4.36817 5.20883 5.92017 4.79297 7.5 4.79297C9.07983 4.79297 10.6318 5.20883 12 5.99874C13.3682 5.20883 14.9202 4.79297 16.5 4.79297C18.0798 4.79297 19.6318 5.20883 21 5.99874"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 6V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 6V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83556">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
