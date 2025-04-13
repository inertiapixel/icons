import React from "react";

export const CakeOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80590)">
<path d="M21 17V12C21 11.2044 20.6839 10.4413 20.1213 9.87868C19.5587 9.31607 18.7956 9 18 9H13M9 9H6C5.20435 9 4.44129 9.31607 3.87868 9.87868C3.31607 10.4413 3 11.2044 3 12V20H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 14.8035C3.312 14.9385 3.654 15.0075 4 15.0005C4.3895 15.0087 4.77512 14.9219 5.12358 14.7477C5.47203 14.5735 5.77283 14.317 6 14.0005C6.22717 13.684 6.52797 13.4276 6.87642 13.2534C7.22488 13.0791 7.6105 12.9924 8 13.0005C8.3895 12.9924 8.77512 13.0791 9.12358 13.2534C9.47203 13.4276 9.77283 13.684 10 14.0005C10.2272 14.317 10.528 14.5735 10.8764 14.7477C11.2249 14.9219 11.6105 15.0087 12 15.0005C12.3895 15.0087 12.7751 14.9219 13.1236 14.7477C13.472 14.5735 13.7728 14.317 14 14.0005M18 14.0005C18.2272 14.317 18.528 14.5735 18.8764 14.7477C19.2249 14.9219 19.6105 15.0087 20 15.0005C20.35 15.0075 20.692 14.9385 21 14.8035"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.1719 6.188C10.2419 6.03 10.3349 5.878 10.4499 5.737L11.9999 4L13.4649 5.638C13.6819 5.87104 13.8401 6.15253 13.9264 6.45906C14.0127 6.76558 14.0245 7.08828 13.961 7.40031C13.8974 7.71233 13.7602 8.00467 13.5609 8.25299C13.3615 8.50132 13.1058 8.69845 12.8149 8.828"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80590">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
