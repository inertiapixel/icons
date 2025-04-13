import React from "react";

export const BrandAmigoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82837)">
<path d="M10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.59068 3.635L2.46068 17.717C0.748676 21.097 4.21968 23.167 6.15068 21.29L8.01068 19.48C11.1527 16.426 12.9697 16.49 16.0497 19.59L17.3787 20.927C19.7507 23.314 23.2437 21.005 21.5547 17.702L14.3597 3.635C13.2457 1.455 10.6947 1.455 9.59068 3.635Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82837">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
