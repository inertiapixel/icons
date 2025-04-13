import React from "react";

export const FlagHeartIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73538)">
<path d="M11.33 13.4466C10.3743 12.791 9.22048 12.4877 8.06589 12.5886C6.9113 12.6895 5.82759 13.1882 5 13.9996V4.9996C5.93464 4.08346 7.19124 3.57031 8.5 3.57031C9.80876 3.57031 11.0654 4.08346 12 4.9996C12.9346 5.91573 14.1912 6.42888 15.5 6.42888C16.8088 6.42888 18.0654 5.91573 19 4.9996V10.9996"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 21V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.0001 21.9996L21.3501 18.7156C21.5556 18.5163 21.719 18.2778 21.8307 18.0142C21.9425 17.7507 22.0003 17.4674 22.0007 17.1812C22.0012 16.8949 21.9443 16.6115 21.8334 16.3476C21.7225 16.0837 21.5599 15.8446 21.3551 15.6446C20.9373 15.236 20.3763 15.0066 19.7918 15.0055C19.2074 15.0044 18.6455 15.2316 18.2261 15.6386L18.0021 15.8586L17.7791 15.6386C17.3613 15.2303 16.8006 15.0011 16.2163 15C15.6321 14.9989 15.0705 15.2259 14.6511 15.6326C14.4456 15.8319 14.2821 16.0703 14.1703 16.3338C14.0585 16.5974 14.0006 16.8806 14 17.1669C13.9994 17.4531 14.0562 17.7366 14.167 18.0005C14.2778 18.2645 14.4404 18.5035 14.6451 18.7036L18.0001 21.9996Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73538">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
