import React from "react";

export const VirusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60221)">
<path d="M7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 3H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5352 8.46472L18.3632 5.63672"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.6562 4.92969L19.0702 6.34369"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 12H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 11V13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5352 15.5352L18.3642 18.3632"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0702 17.6562L17.6562 19.0702"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 21H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.46572 15.5352L5.63672 18.3632"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.34269 19.0702L4.92969 17.6562"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 13V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.46472 8.46472L5.63672 5.63672"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.92969 6.34269L6.34369 4.92969"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60221">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
