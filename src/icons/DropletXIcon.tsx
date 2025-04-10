import React from "react";

export const DropletXIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_75001)">
<path d="M18.9532 13.4687C18.842 12.5526 18.5391 11.6701 18.0642 10.8787L13.1742 3.61873C12.7542 2.99373 11.8872 2.81573 11.2382 3.22173C11.0753 3.32396 10.9356 3.4592 10.8282 3.61873L5.9352 10.8787C4.2402 13.7167 4.9002 17.3197 7.5022 19.4247C8.28482 20.053 9.19048 20.5103 10.1607 20.7669C11.131 21.0236 12.1443 21.0739 13.1352 20.9147" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22L17 17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 22L22 17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75001">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
