import React from "react";

export const MugIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_67904)">
<path d="M4.083 5H14.917C15.0588 4.99961 15.1993 5.02715 15.3305 5.08107C15.4617 5.13498 15.581 5.2142 15.6816 5.31421C15.7821 5.41422 15.862 5.53305 15.9166 5.66393C15.9713 5.79481 15.9996 5.93518 16 6.077V14.692C16 17.072 14.06 19 11.667 19H7.333C4.94 19 3 17.071 3 14.692V6.077C3.00039 5.93518 3.02872 5.79481 3.08336 5.66393C3.138 5.53305 3.21788 5.41422 3.31844 5.31421C3.41901 5.2142 3.53829 5.13498 3.66947 5.08107C3.80066 5.02715 3.94117 4.99961 4.083 5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 8H18.5C19.88 8 21 9.045 21 10.333V12.667C21 13.955 19.88 15 18.5 15H16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67904">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
