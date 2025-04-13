import React from "react";

export const PumpkinScaryIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65666)">
<path d="M9 15L10.5 16L12 15L13.5 16L15 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 11H10.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 11H14.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.9999 6.0822C19.6089 6.6702 20.6269 10.2442 19.7229 14.0652C18.8199 17.8852 16.9729 20.5052 14.3639 19.9182C14.0954 19.8573 13.8355 19.7636 13.5899 19.6392C13.093 19.8754 12.55 19.9987 11.9999 20.0002C11.4439 20.0002 10.9099 19.8732 10.4099 19.6382C10.1646 19.7635 9.90458 19.8576 9.6359 19.9182C7.0269 20.5062 5.1799 17.8852 4.2759 14.0652C3.3729 10.2452 4.3909 6.6702 6.9999 6.0822C8.0849 5.8382 8.5749 6.1482 9.5849 6.8692C10.3009 6.3152 11.1249 6.0002 11.9999 6.0002C12.8759 6.0002 13.6989 6.3152 14.4149 6.8702C15.4249 6.1482 15.9149 5.8382 16.9999 6.0822Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6C12 4.774 12.693 3.654 13.789 3.106L14 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65666">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
