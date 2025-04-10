import React from "react";

export const BrandAmdIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_82841)">
<path d="M16 16V9C16 8.434 15.566 8 15 8H8L3 3H20C20.566 3 21 3.434 21 4V21L16 16Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.293 20.707L16 16H9C8.73478 16 8.48043 15.8946 8.29289 15.7071C8.10536 15.5196 8 15.2652 8 15V8L3.293 12.707C3.10545 12.8945 3.00006 13.1488 3 13.414V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H10.586C10.8512 20.9999 11.1055 20.8946 11.293 20.707Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82841">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
