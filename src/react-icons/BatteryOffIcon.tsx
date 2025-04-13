import React from "react";

export const BatteryOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83987)">
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 7H17C17.5304 7 18.0391 7.21071 18.4142 7.58579C18.7893 7.96086 19 8.46957 19 9V9.5C19 9.63261 19.0527 9.75979 19.1464 9.85355C19.2402 9.94732 19.3674 10 19.5 10C19.6326 10 19.7598 10.0527 19.8536 10.1464C19.9473 10.2402 20 10.3674 20 10.5V13.5C20 13.6326 19.9473 13.7598 19.8536 13.8536C19.7598 13.9473 19.6326 14 19.5 14C19.3674 14 19.2402 14.0527 19.1464 14.1464C19.0527 14.2402 19 14.3674 19 14.5V15M17 17H6C5.46957 17 4.96086 16.7893 4.58579 16.4142C4.21071 16.0391 4 15.5304 4 15V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83987">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
