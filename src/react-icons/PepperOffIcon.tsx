import React from "react";

export const PepperOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66749)">
<path d="M12.59 12.5916C11.82 14.0096 10.055 15.0016 8 15.0016C5.239 15.0016 3 13.2116 3 11.0016C3.00013 12.5821 3.46843 14.1272 4.34581 15.4419C5.22318 16.7565 6.47031 17.7818 7.92981 18.3884C9.38931 18.9949 10.9958 19.1556 12.5465 18.85C14.0972 18.5445 15.5227 17.7865 16.643 16.6716M18.283 14.3146C18.7568 13.2745 19.0013 12.1446 19 11.0016C19.0004 10.3499 18.7885 9.71579 18.3964 9.1952C18.0043 8.67461 17.4534 8.29585 16.8269 8.11622C16.2004 7.93658 15.5325 7.96583 14.9241 8.19955C14.3158 8.43327 13.8001 8.85874 13.455 9.41161"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 8C16 6 18 4 20 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66749">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
