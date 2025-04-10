import React from "react";

export const RouteSquareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_64831)">
<path d="M3 17H7V21H3V17Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 3H21V7H17V3Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 19H16.5C17.4283 19 18.3185 18.6313 18.9749 17.9749C19.6313 17.3185 20 16.4283 20 15.5C20 14.5717 19.6313 13.6815 18.9749 13.0251C18.3185 12.3687 17.4283 12 16.5 12H8.5C7.57174 12 6.6815 11.6313 6.02513 10.9749C5.36875 10.3185 5 9.42826 5 8.5C5 7.57174 5.36875 6.6815 6.02513 6.02513C6.6815 5.36875 7.57174 5 8.5 5H13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64831">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
