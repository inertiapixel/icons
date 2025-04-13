import React from "react";

export const RadioOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65568)">
<path d="M14 3L9.014 5M6.139 6.15L4.629 6.754C4.44344 6.82813 4.28434 6.95616 4.17223 7.12157C4.06011 7.28698 4.00013 7.48218 4 7.682V19.005C4 19.2702 4.10536 19.5246 4.29289 19.7121C4.48043 19.8996 4.73478 20.005 5 20.005H19C19.1315 20.005 19.2618 19.979 19.3833 19.9285C19.5048 19.8781 19.6151 19.8042 19.708 19.711M20 16.005V8.005C20 7.73978 19.8946 7.48543 19.7071 7.29789C19.5196 7.11036 19.2652 7.005 19 7.005H11M7 7.005H4.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12H12M16 12H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 16V16.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65568">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
