import React from "react";

export const MessageCircleDownIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_68738)">
<path d="M12.006 19.9817C10.5151 19.9845 9.04288 19.6494 7.7 19.0017L3 20.0017L4.3 16.1017C1.976 12.6647 2.874 8.22968 6.4 5.72768C9.926 3.22668 14.99 3.43168 18.245 6.20768C20.238 7.90768 21.175 10.2487 20.991 12.5517" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 19L19 22L16 19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68738">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
