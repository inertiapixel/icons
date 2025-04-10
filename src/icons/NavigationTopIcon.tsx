import React from "react";

export const NavigationTopIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_67606)">
<path d="M16.541 19.977C16.6011 20.0003 16.6665 20.0062 16.7297 19.9938C16.7929 19.9814 16.8513 19.9513 16.898 19.907C16.9444 19.8631 16.977 19.8066 16.992 19.7445C17.0069 19.6823 17.0034 19.6172 16.982 19.557L12.001 9L7.01903 19.557C6.99765 19.6172 6.9942 19.6823 7.00911 19.7445C7.02402 19.8066 7.05665 19.8631 7.10303 19.907C7.1498 19.9513 7.20818 19.9814 7.27138 19.9938C7.33458 20.0062 7.40001 20.0003 7.46003 19.977L12.001 18.5L16.541 19.977Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3V5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67606">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
