import React from "react";

export const MessageCircleShareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68691)">
<path d="M12.58 19.9647C10.8979 20.0639 9.21829 19.7325 7.7 19.0017L3 20.0017L4.3 16.1017C1.976 12.6647 2.874 8.22968 6.4 5.72768C9.926 3.22668 14.99 3.43168 18.245 6.20768C20.375 8.02468 21.3 10.5757 20.937 13.0277"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 22L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 21.5V17H16.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68691">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
