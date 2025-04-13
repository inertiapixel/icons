import React from "react";

export const Dna2OffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75251)">
<path d="M17.0002 3V4C16.9932 6.46 16.0902 8.554 14.2952 10.281M12.0002 12C8.67219 13.99 7.00019 16.662 6.99219 20.014V21.014"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 21.0156V20.0156C17 18.5756 16.685 17.2606 16.068 16.0716M12 12.0016C10.097 10.8636 8.73697 9.51659 7.91797 7.93359"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 4H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 20H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75251">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
