import React from "react";

export const Windmill1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59821)">
<path d="M12 12C14.76 12 17 9.99 17 7.5C17 5.01 14.76 3 12 3V12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12C12 14.76 14.01 17 16.5 17C18.99 17 21 14.76 21 12H12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12C9.24 12 7 14.01 7 16.5C7 18.99 9.24 21 12 21V12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12C12 9.24 9.99 7 7.5 7C5.01 7 3 9.24 3 12H12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59821">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
