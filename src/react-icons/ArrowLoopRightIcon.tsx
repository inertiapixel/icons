import React from "react";

export const ArrowLoopRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85310)">
<path d="M12 21V8C12 7.20888 11.7654 6.43552 11.3259 5.77772C10.8864 5.11992 10.2616 4.60723 9.53074 4.30448C8.79983 4.00173 7.99556 3.92252 7.21964 4.07686C6.44372 4.2312 5.73098 4.61216 5.17157 5.17157C4.61216 5.73098 4.2312 6.44372 4.07686 7.21964C3.92252 7.99556 4.00173 8.79983 4.30448 9.53074C4.60723 10.2616 5.11992 10.8864 5.77772 11.3259C6.43552 11.7654 7.20888 12 8 12H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 16L21 12L17 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85310">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
