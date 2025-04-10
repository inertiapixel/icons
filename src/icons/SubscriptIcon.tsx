import React from "react";

export const SubscriptIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_62352)">
<path d="M5 7L13 17M5 17L13 7" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 19.9999H17L20.5 15.9999C20.6313 15.7701 20.7161 15.5167 20.7495 15.2541C20.7829 14.9915 20.7642 14.725 20.6945 14.4696C20.6249 14.2142 20.5056 13.9751 20.3436 13.7658C20.1815 13.5566 19.9798 13.3813 19.75 13.2499C19.5202 13.1186 19.2668 13.0338 19.0042 13.0005C18.7416 12.9671 18.475 12.9858 18.2197 13.0554C17.9643 13.125 17.7252 13.2443 17.5159 13.4064C17.3066 13.5684 17.1313 13.7701 17 13.9999" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62352">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
