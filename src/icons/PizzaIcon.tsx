import React from "react";

export const PizzaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66291)">
<path d="M12 21.5C8.96 21.5 6.048 20.786 3.5 19.517L12 3L20.5 19.517C17.8578 20.8255 14.9485 21.5043 12 21.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.37891 15.8672C7.48889 16.9445 9.82482 17.5046 12.1939 17.5012C14.445 17.5042 16.6676 16.9986 18.6959 16.0222"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 11.01V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 13.9983V13.9883"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66291">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
