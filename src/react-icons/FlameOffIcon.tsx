import React from "react";

export const FlameOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73465)">
<path d="M8.973 8.974C8.638 9.352 8.303 9.69 8 10C6.774 11.26 6 13.24 6 15C5.99889 16.3731 6.46879 17.7051 7.33126 18.7735C8.19374 19.842 9.3966 20.5823 10.7391 20.8709C12.0815 21.1594 13.4823 20.9788 14.7077 20.3592C15.933 19.7395 16.9088 18.7183 17.472 17.466M17.855 13.869C17.535 12.46 16.733 10.824 16 10C15.719 10.472 15.457 10.87 15.21 11.202M12.852 8.852C12.784 6.695 11.67 4.668 11 4C11 4.968 10.82 5.801 10.535 6.527"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73465">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
