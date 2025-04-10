import React from "react";

export const DropletShareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_75015)">
<path d="M18.8842 13.0267C18.7388 12.2682 18.4613 11.5412 18.0642 10.8787L13.1742 3.61873C12.7542 2.99373 11.8872 2.81573 11.2382 3.22173C11.0753 3.32396 10.9356 3.4592 10.8282 3.61873L5.9352 10.8787C4.2402 13.7167 4.9002 17.3197 7.5022 19.4247C8.77562 20.4523 10.3639 21.0102 12.0002 21.0047" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 22L21 17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 21.5V17H16.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75015">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
