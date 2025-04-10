import React from "react";

export const PlugIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_66070)">
<path d="M9.7863 6L18.0013 14.215L15.9473 16.269C15.4118 16.8259 14.7707 17.2704 14.0613 17.5765C13.352 17.8827 12.5887 18.0442 11.8162 18.0518C11.0437 18.0594 10.2774 17.9128 9.56218 17.6207C8.84697 17.3285 8.19722 16.8967 7.65093 16.3504C7.10464 15.8041 6.67279 15.1543 6.38064 14.4391C6.08849 13.7239 5.94192 12.9576 5.9495 12.1851C5.95708 11.4126 6.11865 10.6493 6.42477 9.93997C6.73089 9.23063 7.1754 8.58947 7.7323 8.054L9.7863 6Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 20L7.5 16.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 4L11.5 7.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 9L16.5 12.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66070">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
