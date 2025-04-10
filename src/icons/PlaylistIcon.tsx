import React from "react";

export const PlaylistIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_66126)">
<path d="M11 17C11 17.394 11.0776 17.7841 11.2284 18.1481C11.3791 18.512 11.6001 18.8427 11.8787 19.1213C12.1573 19.3999 12.488 19.6209 12.8519 19.7716C13.2159 19.9224 13.606 20 14 20C14.394 20 14.7841 19.9224 15.1481 19.7716C15.512 19.6209 15.8427 19.3999 16.1213 19.1213C16.3999 18.8427 16.6209 18.512 16.7716 18.1481C16.9224 17.7841 17 17.394 17 17C17 16.606 16.9224 16.2159 16.7716 15.8519C16.6209 15.488 16.3999 15.1573 16.1213 14.8787C15.8427 14.6001 15.512 14.3791 15.1481 14.2284C14.7841 14.0776 14.394 14 14 14C13.606 14 13.2159 14.0776 12.8519 14.2284C12.488 14.3791 12.1573 14.6001 11.8787 14.8787C11.6001 15.1573 11.3791 15.488 11.2284 15.8519C11.0776 16.2159 11 16.606 11 17Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17V4H21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 5H3" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 9H13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 13H3" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66126">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
