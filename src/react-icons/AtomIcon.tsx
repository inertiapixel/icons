import React from "react";

export const AtomIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84661)">
<path d="M12 12V12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0716 4.92955C17.5096 3.36755 13.0716 5.26655 9.17156 9.17255C5.26656 13.0775 3.36756 17.5096 4.92956 19.0726C6.49156 20.6336 10.9296 18.7346 14.8296 14.8286C18.7346 10.9236 20.6336 6.49255 19.0716 4.92955Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.92955 4.92956C3.36755 6.49156 5.26655 10.9296 9.17255 14.8296C13.0775 18.7346 17.5096 20.6336 19.0726 19.0716C20.6336 17.5096 18.7346 13.0716 14.8286 9.17156C10.9236 5.26656 6.49255 3.36756 4.92955 4.92956Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84661">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
