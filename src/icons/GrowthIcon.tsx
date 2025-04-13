import React from "react";

export const GrowthIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72572)">
<path d="M16.5 15C15.3065 15 14.1619 15.4741 13.318 16.318C12.4741 17.1619 12 18.3065 12 19.5C12 17.015 10.21 15 8 15M16.5 11C15.3065 11 14.1619 11.4741 13.318 12.318C12.4741 13.1619 12 14.3065 12 15.5C12 13.015 10.21 11 8 11M16.5 7C15.3065 7 14.1619 7.47411 13.318 8.31802C12.4741 9.16193 12 10.3065 12 11.5C12 9.015 10.21 7 8 7M12 4V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72572">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
