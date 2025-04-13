import React from "react";

export const SeedingOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64401)">
<path d="M11.412 7.407C10.8194 6.17413 9.82487 5.17962 8.592 4.587M4 4H3V6C3 7.5913 3.63214 9.11742 4.75736 10.2426C5.88258 11.3679 7.4087 12 9 12H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14C11.9995 13.412 12.0854 12.827 12.255 12.264M13.765 9.75C14.3212 9.19425 14.9816 8.75363 15.7083 8.45334C16.435 8.15306 17.2137 7.99901 18 8H21V9C21 11.158 19.86 13.05 18.15 14.107M15 15H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64401">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
