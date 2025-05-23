import React from "react";

export const OctagonOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67279)">
<path d="M19.0266 19.0026C18.841 19.1916 18.6202 19.3424 18.3766 19.4466L12.8016 21.8366C12.5481 21.945 12.2753 22.0009 11.9996 22.0009C11.7239 22.0009 11.4511 21.945 11.1976 21.8366L5.62261 19.4466C5.14173 19.2407 4.75857 18.8575 4.55261 18.3766L2.16461 12.8026C2.056 12.5492 2 12.2763 2 12.0006C2 11.7249 2.056 11.452 2.16461 11.1986L4.55361 5.62361C4.65661 5.38361 4.80361 5.16661 4.98661 4.98461M7.67561 3.67461L11.1976 2.16461C11.451 2.056 11.7239 2 11.9996 2C12.2753 2 12.5482 2.056 12.8016 2.16461L18.3766 4.55461C18.8566 4.76061 19.2396 5.14361 19.4466 5.62461L21.8346 11.1986C22.0546 11.7106 22.0546 12.2906 21.8346 12.8026L20.3256 16.3246"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67279">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
