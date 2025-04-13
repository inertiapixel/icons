import React from "react";

export const MessagesOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68518)">
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 11C10.7348 11 10.4804 10.8946 10.2929 10.7071C10.1054 10.5196 10 10.2652 10 10M10 6.032V4C10 3.73478 10.1054 3.48043 10.2929 3.29289C10.4804 3.10536 10.7348 3 11 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V14L18 11H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 15V17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H6L3 21V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 10 4 10H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68518">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
