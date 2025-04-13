import React from "react";

export const MouseOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67941)">
<path d="M7.733 3.704C8.39952 3.24432 9.19033 2.99874 10 3H14C15.0609 3 16.0783 3.42143 16.8284 4.17158C17.5786 4.92172 18 5.93914 18 7V14M17.9 17.895C17.6974 18.7776 17.2013 19.5653 16.4928 20.1293C15.7844 20.6934 14.9055 21.0003 14 21H10C8.93913 21 7.92172 20.5786 7.17157 19.8284C6.42143 19.0783 6 18.0609 6 17V7C6 6.7 6.033 6.407 6.096 6.126"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67941">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
