import React from "react";

export const CloudBoltIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78391)">
<path d="M13 18.0039H6.657C4.085 17.9999 2 15.9929 2 13.5169C2 11.0419 4.085 9.03488 6.657 9.03488C7.05 7.27288 8.451 5.83488 10.332 5.26188C12.212 4.68988 14.288 5.06888 15.776 6.26188C17.264 7.45188 17.938 9.26888 17.546 11.0309H18.536C19.932 11.0309 21.136 11.8619 21.684 13.0609"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16L17 19H21L19 22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78391">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
