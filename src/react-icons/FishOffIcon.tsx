import React from "react";

export const FishOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73617)">
<path d="M16.6886 7.44141C15.8033 8.46878 15.2369 9.73201 15.0586 11.0764"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9.50308C7.307 15.4511 12.293 18.0731 16.597 16.6031M19.18 15.1541C20.168 14.3661 21.11 13.3181 22 12.0011C19 7.55808 15.404 6.18908 11.436 7.45308M8.672 8.71908C6.527 9.98508 4.294 11.9341 2 14.5051"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 11V11.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.1533 11.168C10.8663 11.945 10.9823 12.722 11.5003 13.499"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73617">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
