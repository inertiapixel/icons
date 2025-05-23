import React from "react";

export const RectangularPrismIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65355)">
<path d="M21 14.0085V8.9905C20.9994 8.64157 20.9066 8.299 20.731 7.99748C20.5554 7.69596 20.3032 7.4462 20 7.2735L16 5.2655C15.6954 5.09151 15.3508 5 15 5C14.6492 5 14.3046 5.09151 14 5.2655L4 10.2735C3.381 10.6285 3 11.2835 3 11.9915V17.0095C3 17.7185 3.381 18.3725 4 18.7265L8 20.7345C8.30456 20.9085 8.64925 21 9 21C9.35075 21 9.69544 20.9085 10 20.7345L20 15.7265C20.619 15.3715 21 14.7165 21 14.0085Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 21V13.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 13.5L20.5 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 11L9 13.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65355">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
