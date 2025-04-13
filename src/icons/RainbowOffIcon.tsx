import React from "react";

export const RainbowOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65532)">
<path d="M22 17C22 11.477 17.523 7 12 7C11.692 7 11.387 7.014 11.086 7.041M7.878 7.886C6.12545 8.6789 4.63876 9.96043 3.59619 11.577C2.55362 13.1935 1.99941 15.0764 2 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.088 11.0703C9.67128 11.2882 8.37937 12.006 7.44609 13.094C6.51281 14.1819 5.99983 15.5679 6 17.0013"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 17C14 16.4696 13.7893 15.9609 13.4142 15.5858C13.0391 15.2107 12.5304 15 12 15C11.4696 15 10.9609 15.2107 10.5858 15.5858C10.2107 15.9609 10 16.4696 10 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65532">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
