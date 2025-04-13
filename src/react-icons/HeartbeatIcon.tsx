import React from "react";

export const HeartbeatIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72187)">
<path d="M19.5014 13.5719L12.0014 20.9999L9.10544 18.1319M2.98844 10.0279C2.98008 8.97326 3.30543 7.94299 3.91796 7.08441C4.53048 6.22584 5.39882 5.58294 6.39878 5.24766C7.39875 4.91238 8.47912 4.90189 9.48541 5.21768C10.4917 5.53348 11.3724 6.15939 12.0014 7.0059C12.415 6.45593 12.9376 5.99723 13.5365 5.65851C14.1355 5.31979 14.7979 5.10835 15.4824 5.03743C16.1668 4.9665 16.8585 5.0376 17.5142 5.2463C18.1699 5.45499 18.7755 5.79678 19.293 6.25027C19.8105 6.70376 20.2289 7.25919 20.5219 7.8818C20.8149 8.50441 20.9762 9.18079 20.9957 9.86861C21.0153 10.5564 20.8927 11.2409 20.6356 11.8792C20.3784 12.5174 19.9923 13.0957 19.5014 13.5779"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 13H5L7 16L9 10L10 13H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72187">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
