import React from "react";

export const LampOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71040)">
<path d="M9 20H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.325 7.35L5 12H12M16 12H19L15 4H9L8.662 4.676"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71040">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
