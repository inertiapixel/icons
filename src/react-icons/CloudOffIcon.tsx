import React from "react";

export const CloudOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78301)">
<path d="M9.58 5.54788C9.82 5.43788 10.072 5.34088 10.332 5.26188C12.212 4.68988 14.288 5.06888 15.776 6.26188C17.264 7.45188 17.938 9.26888 17.546 11.0309H18.536C20.449 11.0309 22 12.5909 22 14.5169C22 15.4739 21.617 16.3409 20.997 16.9709M18 18.0039H6.657C4.085 17.9999 2 15.9929 2 13.5169C2 11.0419 4.085 9.03488 6.657 9.03488C6.787 8.45288 7.027 7.90688 7.357 7.41488"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78301">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
