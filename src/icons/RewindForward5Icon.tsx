import React from "react";

export const RewindForward5Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65097)">
<path d="M9 18C7.4087 18 5.88258 17.3679 4.75736 16.2426C3.63214 15.1174 3 13.5913 3 12C3 10.4087 3.63214 8.88258 4.75736 7.75736C5.88258 6.63214 7.4087 6 9 6H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 20H15C15.2652 20 15.5196 19.8946 15.7071 19.7071C15.8946 19.5196 16 19.2652 16 19V18C16 17.7348 15.8946 17.4804 15.7071 17.2929C15.5196 17.1054 15.2652 17 15 17H13V14H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 9L20 6L17 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65097">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
