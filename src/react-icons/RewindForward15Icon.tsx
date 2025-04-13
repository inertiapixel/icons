import React from "react";

export const RewindForward15Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65121)">
<path d="M17 9L20 6L17 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 18C7.4087 18 5.88258 17.3679 4.75736 16.2426C3.63214 15.1174 3 13.5913 3 12C3 10.4087 3.63214 8.88258 4.75736 7.75736C5.88258 6.63214 7.4087 6 9 6H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 20H18C18.2652 20 18.5196 19.8946 18.7071 19.7071C18.8946 19.5196 19 19.2652 19 19V18C19 17.7348 18.8946 17.4804 18.7071 17.2929C18.5196 17.1054 18.2652 17 18 17H16V14H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 14V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65121">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
