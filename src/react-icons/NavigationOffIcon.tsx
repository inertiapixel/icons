import React from "react";

export const NavigationOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67648)">
<path d="M16.2805 12.28C15.3305 10.216 13.9035 7.123 12.0005 3C11.3005 4.515 10.7775 5.652 10.4275 6.41M9.15745 9.16C8.27545 11.073 6.56746 14.778 4.03046 20.275C3.96046 20.475 4.01346 20.699 4.16546 20.847C4.31546 20.995 4.53946 21.04 4.73546 20.963L12.0005 18.5L19.2655 20.963C19.4615 21.04 19.6855 20.995 19.8355 20.847C19.9098 20.7742 19.9619 20.6818 19.9856 20.5805C20.0093 20.4792 20.0037 20.3732 19.9695 20.275L19.7095 19.712"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67648">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
