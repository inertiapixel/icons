import React from "react";

export const GlassOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72747)">
<path d="M8 21H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 5L18 11C18 11.887 17.767 12.685 17.354 13.37M15.271 15.256C14.33 15.736 13.207 16 12 16C8.686 16 6 14.012 6 11L6.711 6.732"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.9841 6.959C11.3131 6.986 11.6531 7 12.0011 7C14.7621 7 17.0011 6.105 17.0011 5C17.0011 3.895 14.7621 3 12.0011 3C10.2851 3 8.77109 3.346 7.87109 3.872"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72747">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
