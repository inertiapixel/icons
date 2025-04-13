import React from "react";

export const MugOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67908)">
<path d="M9 5H14.917C15.0588 4.99961 15.1993 5.02715 15.3305 5.08107C15.4617 5.13498 15.581 5.2142 15.6816 5.31421C15.7821 5.41422 15.862 5.53305 15.9166 5.66393C15.9713 5.79481 15.9996 5.93518 16 6.077V12M15.833 15.88C15.5707 16.7814 15.0225 17.5731 14.2711 18.1358C13.5197 18.6985 12.6058 19.0018 11.667 19H7.333C4.94 19 3 17.071 3 14.692V6.077C3.00039 5.93518 3.02872 5.79481 3.08336 5.66393C3.138 5.53305 3.21788 5.41422 3.31844 5.31421C3.41901 5.2142 3.53829 5.13498 3.66947 5.08107C3.80066 5.02715 3.94117 4.99961 4.083 5H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 8H18.5C19.88 8 21 9.045 21 10.333V12.667C21 13.815 20.11 14.77 18.94 14.964"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67908">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
