import React from "react";

export const SailboatIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64660)">
<path d="M2 20.0005C2.22717 20.317 2.52797 20.5735 2.87642 20.7477C3.22488 20.9219 3.6105 21.0087 4 21.0005C4.3895 21.0087 4.77512 20.9219 5.12358 20.7477C5.47203 20.5735 5.77283 20.317 6 20.0005C6.22717 19.684 6.52797 19.4276 6.87642 19.2534C7.22488 19.0791 7.6105 18.9924 8 19.0005C8.3895 18.9924 8.77512 19.0791 9.12358 19.2534C9.47203 19.4276 9.77283 19.684 10 20.0005C10.2272 20.317 10.528 20.5735 10.8764 20.7477C11.2249 20.9219 11.6105 21.0087 12 21.0005C12.3895 21.0087 12.7751 20.9219 13.1236 20.7477C13.472 20.5735 13.7728 20.317 14 20.0005C14.2272 19.684 14.528 19.4276 14.8764 19.2534C15.2249 19.0791 15.6105 18.9924 16 19.0005C16.3895 18.9924 16.7751 19.0791 17.1236 19.2534C17.472 19.4276 17.7728 19.684 18 20.0005C18.2272 20.317 18.528 20.5735 18.8764 20.7477C19.2249 20.9219 19.6105 21.0087 20 21.0005C20.3895 21.0087 20.7751 20.9219 21.1236 20.7477C21.472 20.5735 21.7728 20.317 22 20.0005"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 18L3 15H21L20 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 12H18L11 3V12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 7L6 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64660">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
