import React from "react";

export const BrandCloudflareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82601)">
<path d="M13.031 7.00784C15.5 7.00084 16.326 8.30084 17 10.0008C21 10.0008 21.994 13.8258 22 16.0008H2C1.999 14.3608 3.36 13.0468 5 13.0008C5 11.5008 6 10.0008 8 10.0008C8.66 8.05884 10.562 7.01484 13.031 7.00784Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 10L14.5 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82601">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
