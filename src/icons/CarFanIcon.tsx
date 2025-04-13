import React from "react";

export const CarFanIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80051)">
<path d="M12 12V3L16.912 4.914C17.1919 5.02302 17.438 5.20427 17.625 5.4393C17.8121 5.67432 17.9336 5.95472 17.9771 6.25196C18.0206 6.5492 17.9846 6.85265 17.8727 7.13143C17.7607 7.4102 17.5769 7.65435 17.34 7.839L12 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12H21L19.086 16.912C18.977 17.1919 18.7957 17.438 18.5607 17.625C18.3257 17.8121 18.0453 17.9336 17.748 17.9771C17.4508 18.0206 17.1473 17.9846 16.8686 17.8727C16.5898 17.7607 16.3457 17.5769 16.161 17.34L12 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11.9989H3L4.914 7.08694C5.02302 6.80702 5.20427 6.56098 5.4393 6.37389C5.67432 6.18679 5.95472 6.06531 6.25196 6.02182C6.5492 5.97833 6.85265 6.01437 7.13143 6.12629C7.4102 6.2382 7.65435 6.42199 7.839 6.65894L12 11.9989Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9989 12V21L7.08694 19.086C6.80702 18.977 6.56098 18.7957 6.37389 18.5607C6.18679 18.3257 6.06531 18.0453 6.02182 17.748C5.97833 17.4508 6.01437 17.1473 6.12629 16.8686C6.2382 16.5898 6.42199 16.3457 6.65894 16.161L11.9989 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80051">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
