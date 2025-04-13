import React from "react";

export const DropletOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75045)">
<path d="M18.9632 14.9397C19.1132 13.5246 18.7976 12.0992 18.0642 10.8797L13.1742 3.61969C12.7542 2.99369 11.8872 2.81569 11.2382 3.22169C11.0753 3.32391 10.9356 3.45915 10.8282 3.61869L9.5462 5.51869M7.9212 7.93369L5.9352 10.8797C4.2402 13.7167 4.9002 17.3197 7.5022 19.4247C10.1042 21.5297 13.8972 21.5297 16.4982 19.4247C17.0291 18.9965 17.493 18.4913 17.8742 17.9257"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75045">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
