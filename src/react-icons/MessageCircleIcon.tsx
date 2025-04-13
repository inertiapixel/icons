import React from "react";

export const MessageCircleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68674)">
<path d="M3 20.0017L4.3 16.1017C1.976 12.6647 2.874 8.22968 6.4 5.72768C9.926 3.22668 14.99 3.43168 18.245 6.20768C21.5 8.98468 21.94 13.4737 19.274 16.7087C16.608 19.9437 11.659 20.9237 7.7 19.0017L3 20.0017Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68674">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
