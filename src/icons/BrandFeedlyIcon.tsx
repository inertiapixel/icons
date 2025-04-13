import React from "react";

export const BrandFeedlyIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82328)">
<path d="M7.83203 12.277L12.277 7.83203"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.0547 14.4993L12.2777 12.2773"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.2773 16.723L12.8323 16.168"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.8271 14.8271C20.577 14.077 20.9983 13.0598 20.9983 11.9991C20.9983 10.9385 20.577 9.92126 19.8271 9.17115L14.8271 4.17115C14.077 3.42126 13.0598 3 11.9991 3C10.9385 3 9.92126 3.42126 9.17115 4.17115L4.17115 9.17115C3.42126 9.92126 3 10.9385 3 11.9991C3 13.0598 3.42126 14.077 4.17115 14.8271L10.3421 20.9991H13.6561L19.8271 14.8271Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82328">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
