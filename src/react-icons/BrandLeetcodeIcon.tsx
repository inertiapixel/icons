import React from "react";

export const BrandLeetcodeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82027)">
<path d="M12 13H19.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.42578 7.26853L14.4248 2.26953"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.633 16.6441L14.231 19.0591C13.9346 19.3573 13.5822 19.594 13.194 19.7555C12.8058 19.917 12.3895 20.0002 11.969 20.0002C11.5485 20.0002 11.1322 19.917 10.744 19.7555C10.3558 19.594 10.0034 19.3573 9.70701 19.0591L5.93701 15.2721C5.33685 14.6682 5 13.8515 5 13.0001C5 12.1487 5.33685 11.3319 5.93701 10.7281L9.70701 6.94109C10.0034 6.64286 10.3558 6.40617 10.744 6.24466C11.1322 6.08315 11.5485 6 11.969 6C12.3895 6 12.8058 6.08315 13.194 6.24466C13.5822 6.40617 13.9346 6.64286 14.231 6.94109L16.533 9.25409"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82027">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
