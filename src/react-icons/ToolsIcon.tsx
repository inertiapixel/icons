import React from "react";

export const ToolsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61430)">
<path d="M3 21.0003H7L20 8.0003C20.5304 7.46987 20.8284 6.75045 20.8284 6.0003C20.8284 5.25016 20.5304 4.53074 20 4.0003C19.4696 3.46987 18.7501 3.17188 18 3.17188C17.2499 3.17188 16.5304 3.46987 16 4.0003L3 17.0003V21.0003Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 5.5L18.5 9.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8L7 3L3 7L8 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 8L5.5 9.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12L21 17L17 21L12 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 17L14.5 18.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61430">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
