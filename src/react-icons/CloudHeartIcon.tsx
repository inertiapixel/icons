import React from "react";

export const CloudHeartIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78326)">
<path d="M10 18.0039H6.657C4.085 17.9999 2 15.9929 2 13.5169C2 11.0419 4.085 9.03488 6.657 9.03488C7.05 7.27288 8.451 5.83488 10.332 5.26188C12.212 4.68988 14.288 5.06888 15.776 6.26188C17.264 7.45188 17.938 9.26888 17.546 11.0309H18.536"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.0001 21.9996L21.3501 18.7156C21.5556 18.5163 21.719 18.2778 21.8307 18.0142C21.9425 17.7507 22.0003 17.4674 22.0007 17.1812C22.0012 16.8949 21.9443 16.6115 21.8334 16.3476C21.7225 16.0837 21.5599 15.8446 21.3551 15.6446C20.9373 15.236 20.3763 15.0066 19.7918 15.0055C19.2074 15.0044 18.6455 15.2316 18.2261 15.6386L18.0021 15.8586L17.7791 15.6386C17.3613 15.2303 16.8006 15.0011 16.2163 15C15.6321 14.9989 15.0705 15.2259 14.6511 15.6326C14.4456 15.8319 14.2821 16.0703 14.1703 16.3338C14.0585 16.5974 14.0006 16.8806 14 17.1669C13.9994 17.4531 14.0562 17.7366 14.167 18.0005C14.2778 18.2645 14.4404 18.5035 14.6451 18.7036L18.0001 21.9996Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78326">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
