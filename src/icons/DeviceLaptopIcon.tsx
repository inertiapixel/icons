import React from "react";

export const DeviceLaptopIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_76166)">
<path d="M3 19H21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 7C5 6.73478 5.10536 6.48043 5.29289 6.29289C5.48043 6.10536 5.73478 6 6 6H18C18.2652 6 18.5196 6.10536 18.7071 6.29289C18.8946 6.48043 19 6.73478 19 7V15C19 15.2652 18.8946 15.5196 18.7071 15.7071C18.5196 15.8946 18.2652 16 18 16H6C5.73478 16 5.48043 15.8946 5.29289 15.7071C5.10536 15.5196 5 15.2652 5 15V7Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_76166">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
