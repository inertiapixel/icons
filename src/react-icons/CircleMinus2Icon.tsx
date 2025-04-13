import React from "react";

export const CircleMinus2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78944)">
<path d="M20.4752 15.0284C21.1259 13.2074 21.1727 11.2253 20.6089 9.37562C20.045 7.52594 18.9004 5.90706 17.3445 4.75874C15.7887 3.61043 13.9044 2.99375 11.9707 3.00005C10.037 3.00635 8.15673 3.63528 6.6084 4.79371C5.06008 5.95213 3.92603 7.57843 3.37422 9.43174C2.82241 11.2851 2.88219 13.2668 3.5447 15.0835C4.20721 16.9002 5.43722 18.4552 7.05256 19.5182C8.66789 20.5812 10.5826 21.0956 12.5132 20.9854"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78944">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
