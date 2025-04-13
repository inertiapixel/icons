import React from "react";

export const SaltIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64646)">
<path d="M12 13V13.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16V16.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 16V16.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 8H16.5L16.219 5.752C16.1585 5.26821 15.9234 4.82316 15.5579 4.50052C15.1924 4.17789 14.7216 3.99989 14.234 4H9.766C9.27827 3.99965 8.80722 4.17754 8.44147 4.50019C8.07572 4.82285 7.84048 5.26803 7.78 5.752L7.5 8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.49862 8L5.88662 17.671C5.83883 17.9575 5.85404 18.2511 5.93119 18.5311C6.00834 18.8112 6.14557 19.0711 6.33335 19.2928C6.52112 19.5144 6.75493 19.6925 7.01851 19.8146C7.28209 19.9368 7.56912 20 7.85962 20H16.1376C16.4281 20 16.7151 19.9368 16.9787 19.8146C17.2423 19.6925 17.4761 19.5144 17.6639 19.2928C17.8517 19.0711 17.9889 18.8112 18.0661 18.5311C18.1432 18.2511 18.1584 17.9575 18.1106 17.671L16.4986 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64646">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
