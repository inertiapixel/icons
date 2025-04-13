import React from "react";

export const IrregularPolyhedronIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71214)">
<path d="M6.00169 12L4.24969 18.13C4.18129 18.3685 4.204 18.6239 4.3134 18.8466C4.42281 19.0693 4.6111 19.2434 4.84169 19.335L11.1237 21.838C11.6891 22.054 12.3143 22.054 12.8797 21.838L19.1617 19.335C19.3921 19.2434 19.5802 19.0695 19.6896 18.847C19.799 18.6246 19.8218 18.3694 19.7537 18.131L18.0017 12L19.7537 5.87002C19.8221 5.63151 19.7994 5.3761 19.69 5.1534C19.5806 4.93071 19.3923 4.75664 19.1617 4.66502L12.8797 2.16202C12.3143 1.94599 11.6891 1.94599 11.1237 2.16202L4.84169 4.66502C4.61132 4.75662 4.4232 4.93053 4.31381 5.15301C4.20442 5.37548 4.18157 5.63065 4.24969 5.86902L6.00169 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 5.5L11.122 7.83C11.6853 8.05691 12.3147 8.05691 12.878 7.83L19.5 5.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 12L11.21 13.862C11.7207 14.0452 12.2793 14.0452 12.79 13.862L18 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71214">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
