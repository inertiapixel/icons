import React from "react";

export const BrandSharikIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81590)">
<path d="M4.28078 16.6061C3.24816 14.8874 2.82129 12.8722 3.06836 10.8824C3.31543 8.89262 4.22218 7.04303 5.64378 5.62906C7.0681 4.21216 8.92413 3.31053 10.9183 3.06676C12.9125 2.82298 14.9311 3.25098 16.6548 4.28306C15.0708 8.97506 14.2398 11.2431 11.9998 13.0001C10.4158 14.2421 8.16378 15.2401 4.28078 16.6061ZM20.6158 9.30006C22.7288 16.8901 15.7238 22.6611 9.31379 20.5641C11.2448 17.4641 12.5488 15.9581 13.9998 14.4991C15.7048 12.7841 17.5908 11.2691 20.6158 9.30006Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81590">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
