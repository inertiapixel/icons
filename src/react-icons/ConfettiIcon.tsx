import React from "react";

export const ConfettiIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77931)">
<path d="M4 5H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 4V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 4L11 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 5H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 4V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 9L14 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 13L20 12.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 19H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 18V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.0018 16.518L7.48376 10L3.09376 19.58C3.00699 19.766 2.97955 19.9742 3.01518 20.1763C3.0508 20.3785 3.14776 20.5647 3.29289 20.7099C3.43802 20.855 3.6243 20.952 3.82643 20.9876C4.02856 21.0232 4.23676 20.9958 4.42276 20.909L14.0018 16.518Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77931">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
