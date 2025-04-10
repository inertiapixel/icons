import React from "react";

export const BrandUnsplashIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_81283)">
<path d="M4 11H9V15H15V11H20V20H4V11ZM9 4H15V8H9V4Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81283">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
