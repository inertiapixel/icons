import React from "react";

export const OmIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67219)">
<path d="M6.99972 12C9.20972 12 10.9997 10.433 10.9997 8.5C10.9997 6.567 9.20972 5 6.99972 5C5.40572 5 4.02972 5.816 3.38672 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.42303 14.483C3.14191 15.1182 2.99778 15.8054 3.00003 16.5C3.00003 18.985 4.79003 21 7.00003 21C9.21003 21 11 18.985 11 16.5C11 14.015 9.21003 12 7.00003 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.0699 17.01C14.3969 19.287 15.8089 21 17.4989 21C19.4319 21 20.9989 18.761 20.9989 16C20.9989 13.239 19.4319 11 17.4989 11C16.5389 11 15.6309 11.606 14.9989 12.5C14.2819 13.549 13.2389 14.2 12.0629 14.2C11.1429 14.2 10.2969 13.794 9.62891 13.113"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 3L19 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3C13.667 6.667 16.667 8.333 21 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67219">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
