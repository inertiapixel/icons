import React from "react";

export const BallAmericanFootballIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84424)">
<path d="M15 9L9 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 12L12 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 10L14 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 21C8 19.6739 7.47322 18.4021 6.53553 17.4645C5.59785 16.5268 4.32608 16 3 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 3C8.82 3 3 8.82 3 16C3 17.3261 3.52678 18.5979 4.46447 19.5355C5.40215 20.4732 6.67392 21 8 21C15.18 21 21 15.18 21 8C21 6.67392 20.4732 5.40215 19.5355 4.46447C18.5979 3.52678 17.3261 3 16 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 3C16 4.32608 16.5268 5.59785 17.4645 6.53553C18.4021 7.47322 19.6739 8 21 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84424">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
