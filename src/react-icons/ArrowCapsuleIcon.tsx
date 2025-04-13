import React from "react";

export const ArrowCapsuleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85474)">
<path d="M18 15C18 16.5913 17.3679 18.1174 16.2426 19.2426C15.1174 20.3679 13.5913 21 12 21C10.4087 21 8.88258 20.3679 7.75736 19.2426C6.63214 18.1174 6 16.5913 6 15V9C6 7.4087 6.63214 5.88258 7.75736 4.75736C8.88258 3.63214 10.4087 3 12 3C13.5913 3 15.1174 3.63214 16.2426 4.75736C17.3679 5.88258 18 7.4087 18 9V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 8L18 11L21 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85474">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
