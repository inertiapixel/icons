import React from "react";

export const HourglassOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71566)">
<path d="M18 18V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H7C6.73478 21 6.48043 20.8946 6.29289 20.7071C6.10536 20.5196 6 20.2652 6 20V18C6 16.4087 6.63214 14.8826 7.75736 13.7574C8.88258 12.6321 10.4087 12 12 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 6C6 7.5913 6.63214 9.11742 7.75736 10.2426C8.88258 11.3679 10.4087 12 12 12M15.13 11.12C16.0068 10.5838 16.7313 9.83143 17.2338 8.9349C17.7364 8.03837 18.0002 7.02778 18 6V4C18 3.73478 17.8946 3.48043 17.7071 3.29289C17.5196 3.10536 17.2652 3 17 3H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71566">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
