import React from "react";

export const RadioIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65561)">
<path d="M14 3L4.629 6.749C4.44344 6.82313 4.28434 6.95116 4.17223 7.11657C4.06011 7.28198 4.00013 7.47718 4 7.677V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7H4.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 16V16.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 16V16.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65561">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
