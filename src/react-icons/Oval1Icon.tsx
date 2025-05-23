import React from "react";

export const Oval1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67200)">
<path d="M6 12C6 14.3869 6.63214 16.6761 7.75736 18.364C8.88258 20.0518 10.4087 21 12 21C13.5913 21 15.1174 20.0518 16.2426 18.364C17.3679 16.6761 18 14.3869 18 12C18 9.61305 17.3679 7.32387 16.2426 5.63604C15.1174 3.94821 13.5913 3 12 3C10.4087 3 8.88258 3.94821 7.75736 5.63604C6.63214 7.32387 6 9.61305 6 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67200">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
