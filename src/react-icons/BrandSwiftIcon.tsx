import React from "react";

export const BrandSwiftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81428)">
<path d="M20.548 15.829C21.878 11.703 19.164 6.30801 14.501 3.00101C14.366 2.90501 16.891 9.70501 15.809 12.125C13.656 10.671 11.053 8.63101 8.001 6.00101L7.501 8.00101L4.001 7.00101C8.361 11.749 11.214 14.696 12.561 15.842C7.903 17.931 1.911 14.864 2.001 15.001C3.017 16.546 8.001 21.001 13.001 21.001C15.001 21.001 16.789 20.499 17.743 19.612C17.748 19.607 18.175 19.166 19.121 19.442C19.625 19.59 20.584 20.109 22.001 21.001V19.494C22.001 18.117 21.486 16.824 20.548 15.829Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81428">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
