import React from "react";

export const RectangularPrismPlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65361)">
<path d="M21 12.4995V8.9905C20.9994 8.64157 20.9066 8.299 20.731 7.99748C20.5554 7.69596 20.3032 7.4462 20 7.2735L16 5.2655C15.6954 5.09151 15.3508 5 15 5C14.6492 5 14.3046 5.09151 14 5.2655L4 10.2725C3.381 10.6275 3 11.2825 3 11.9905V17.0085C3 17.7175 3.381 18.3715 4 18.7255L8 20.7335C8.30456 20.9075 8.64925 20.999 9 20.999C9.35075 20.999 9.69544 20.9075 10 20.7335L12.062 19.7015"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 21V13.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 13.5L20.5 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 11L9 13.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65361">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
