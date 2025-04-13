import React from "react";

export const BrandAuth0Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82765)">
<path d="M12 14.5L6.5 18L8.5 12L4 8H10L12 3L14 8H20L15.5 12L17.5 18L12 14.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.5069 8.872L18.4969 3H5.50286L3.49386 8.872C2.25186 12.465 3.35886 15.966 6.74286 18.279L11.9999 22L17.2569 18.279C20.6419 15.966 21.7469 12.465 20.5069 8.872Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82765">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
