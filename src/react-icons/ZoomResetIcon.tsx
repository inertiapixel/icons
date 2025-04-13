import React from "react";

export const ZoomResetIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59298)">
<path d="M21 21L15 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.26953 12.0428C3.70649 13.4659 4.58474 14.7132 5.7773 15.6043C6.96985 16.4954 8.41491 16.9841 9.90353 16.9998C11.6255 17.0211 13.2951 16.4079 14.594 15.2772C15.8929 14.1465 16.7303 12.5773 16.9465 10.8688C17.1593 9.16033 16.7349 7.43336 15.7546 6.01803C14.7743 4.6027 13.3067 3.5983 11.6325 3.19681C9.95794 2.79175 8.19288 3.01656 6.67328 3.82845C5.15369 4.64033 3.98567 5.98262 3.39153 7.59981"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 4V8H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59298">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
