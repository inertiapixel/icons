import React from "react";

export const BookOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83569)">
<path d="M3 18.9987C4.36817 18.2088 5.92017 17.793 7.5 17.793C9.07983 17.793 10.6318 18.2088 12 18.9987C13.7831 17.9694 15.8652 17.5826 17.899 17.9027"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 5.99874C3.66412 5.61521 4.37455 5.31813 5.114 5.11474M8.914 4.90474C9.984 5.07474 11.03 5.43874 12 5.99874C13.3682 5.20883 14.9202 4.79297 16.5 4.79297C18.0798 4.79297 19.6318 5.20883 21 5.99874"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 6V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6V8M12 12V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 6V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83569">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
