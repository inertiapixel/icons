import React from "react";

export const RewindBackward5Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65145)">
<path d="M15 18C16.5913 18 18.1174 17.3679 19.2426 16.2426C20.3679 15.1174 21 13.5913 21 12C21 10.4087 20.3679 8.88258 19.2426 7.75736C18.1174 6.63214 16.5913 6 15 6H4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 9L4 6L7 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 20H10C10.2652 20 10.5196 19.8946 10.7071 19.7071C10.8946 19.5196 11 19.2652 11 19V18C11 17.7348 10.8946 17.4804 10.7071 17.2929C10.5196 17.1054 10.2652 17 10 17H8V14H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65145">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
