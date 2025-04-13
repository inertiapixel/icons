import React from "react";

export const BrandFiverrIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82299)">
<path d="M15 3H13C11.4087 3 9.88258 3.63214 8.75736 4.75736C7.63214 5.88258 7 7.4087 7 9H4V13H7V21H11V14H15V21H19V10H11V8.967C11 8.70589 11.0519 8.44739 11.1528 8.20656C11.2537 7.96574 11.4016 7.74741 11.5877 7.56432C11.7739 7.38123 11.9947 7.23704 12.2371 7.14015C12.4796 7.04326 12.7389 6.99562 13 7H15V3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82299">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
