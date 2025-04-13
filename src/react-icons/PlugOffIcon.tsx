import React from "react";

export const PlugOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66084)">
<path d="M16.1243 16.0915L15.9473 16.2685C15.4118 16.8254 14.7707 17.2699 14.0613 17.5761C13.352 17.8822 12.5887 18.0438 11.8162 18.0513C11.0437 18.0589 10.2774 17.9123 9.56218 17.6202C8.84697 17.328 8.19722 16.8962 7.65093 16.3499C7.10464 15.8036 6.67279 15.1539 6.38064 14.4387C6.08849 13.7235 5.94192 12.9572 5.9495 12.1846C5.95708 11.4121 6.11865 10.6488 6.42477 9.9395C6.73089 9.23016 7.1754 8.589 7.7323 8.05353L7.8913 7.89453"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 20L7.5 16.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 4L11.5 7.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 9L16.5 12.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66084">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
