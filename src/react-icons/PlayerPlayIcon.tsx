import React from "react";

export const PlayerPlayIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57641)">
<path d="M6 4.00028V20.0003C5.99995 20.1782 6.04737 20.3529 6.13738 20.5064C6.22739 20.6599 6.35672 20.7866 6.51202 20.8734C6.66733 20.9602 6.84299 21.0041 7.02088 21.0003C7.19878 20.9966 7.37245 20.9455 7.524 20.8523L20.524 12.8523C20.6696 12.7628 20.7898 12.6375 20.8733 12.4884C20.9567 12.3392 21.0005 12.1712 21.0005 12.0003C21.0005 11.8294 20.9567 11.6613 20.8733 11.5122C20.7898 11.363 20.6696 11.2378 20.524 11.1483L7.524 3.14828C7.37245 3.05505 7.19878 3.00393 7.02088 3.00022C6.84299 2.9965 6.66733 3.04032 6.51202 3.12714C6.35672 3.21397 6.22739 3.34066 6.13738 3.49414C6.04737 3.64763 5.99995 3.82235 6 4.00028Z" />
</g>
<defs>
<clipPath id="clip0_802_57641">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
