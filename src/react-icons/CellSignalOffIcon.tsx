import React from "react";

export const CellSignalOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79845)">
<path d="M20.0012 20.0002H4.73221C4.5874 20.0005 4.44578 19.9577 4.32531 19.8773C4.20484 19.7969 4.11096 19.6826 4.05558 19.5488C4.00019 19.415 3.9858 19.2677 4.01422 19.1257C4.04264 18.9838 4.1126 18.8534 4.21521 18.7512L11.4802 11.4872M13.4802 9.48721L18.7522 4.21521C18.8544 4.1126 18.9848 4.04264 19.1267 4.01422C19.2687 3.9858 19.416 4.00019 19.5498 4.05558C19.6836 4.11096 19.7979 4.20484 19.8783 4.32531C19.9587 4.44578 20.0015 4.5874 20.0012 4.73221V16.0012"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79845">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
