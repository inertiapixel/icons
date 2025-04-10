import React from "react";

export const DropletPauseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_75040)">
<path d="M18.9522 13.4577C18.8398 12.5454 18.5373 11.6669 18.0642 10.8787L13.1742 3.61873C12.7542 2.99373 11.8872 2.81573 11.2382 3.22173C11.0753 3.32396 10.9356 3.4592 10.8282 3.61873L5.9352 10.8787C4.2402 13.7167 4.9002 17.3197 7.5022 19.4247C8.26936 20.0407 9.155 20.4923 10.1041 20.7516C11.0532 21.0108 12.0454 21.0722 13.0192 20.9317" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17V22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 17V22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75040">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
