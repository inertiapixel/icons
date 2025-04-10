import React from "react";

export const MessageCircleMinusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_68725)">
<path d="M12.023 19.9817C10.5263 19.987 9.04806 19.6519 7.7 19.0017L3 20.0017L4.3 16.1017C1.976 12.6647 2.874 8.22968 6.4 5.72768C9.926 3.22668 14.99 3.43168 18.245 6.20768C20.963 8.52668 21.718 12.0397 20.341 15.0187" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68725">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
