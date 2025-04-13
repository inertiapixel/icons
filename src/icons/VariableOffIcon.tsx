import React from "react";

export const VariableOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60477)">
<path d="M4.67523 4.67969C2.50523 9.45569 2.61323 14.2717 5.00023 19.9997"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 4C20.959 7.917 21.383 11.834 20.272 16.232M19.289 19.283C19.196 19.521 19.1 19.76 19 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.6953 11.6953C11.7903 11.9523 11.8953 12.2283 12.0153 12.5263C12.9993 14.9993 12.9993 15.9993 13.9993 15.9993H14.9993"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16C9.5 16 11 14 12 12.5M14.022 9.986C14.651 9.404 15.326 9 16 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60477">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
