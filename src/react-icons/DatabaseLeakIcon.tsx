import React from "react";

export const DatabaseLeakIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_76978)">
<path d="M4 6C4 7.657 7.582 9 12 9C16.418 9 20 7.657 20 6C20 4.343 16.418 3 12 3C7.582 3 4 4.343 4 6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6V18C4 19.657 7.582 21 12 21C16.418 21 20 19.657 20 18V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15.0005C4.3895 15.0087 4.77512 14.9219 5.12358 14.7477C5.47203 14.5735 5.77283 14.317 6 14.0005C6.22717 13.684 6.52797 13.4276 6.87642 13.2534C7.22488 13.0791 7.6105 12.9924 8 13.0005C8.3895 12.9924 8.77512 13.0791 9.12358 13.2534C9.47203 13.4276 9.77283 13.684 10 14.0005C10.2272 14.317 10.528 14.5735 10.8764 14.7477C11.2249 14.9219 11.6105 15.0087 12 15.0005C12.3895 15.0087 12.7751 14.9219 13.1236 14.7477C13.472 14.5735 13.7728 14.317 14 14.0005C14.2272 13.684 14.528 13.4276 14.8764 13.2534C15.2249 13.0791 15.6105 12.9924 16 13.0005C16.3895 12.9924 16.7751 13.0791 17.1236 13.2534C17.472 13.4276 17.7728 13.684 18 14.0005C18.2272 14.317 18.528 14.5735 18.8764 14.7477C19.2249 14.9219 19.6105 15.0087 20 15.0005"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_76978">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
