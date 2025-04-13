import React from "react";

export const BrandAngularIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82818)">
<path d="M5.42872 17.2435L11.5047 20.7145C11.6558 20.8008 11.8267 20.8462 12.0007 20.8462C12.1747 20.8462 12.3457 20.8008 12.4967 20.7145L18.5727 17.2435C18.706 17.1674 18.82 17.0615 18.9059 16.9343C18.9917 16.807 19.0471 16.6616 19.0677 16.5095L20.3907 6.80549C20.4218 6.57754 20.3733 6.34584 20.2534 6.14947C20.1336 5.9531 19.9497 5.80406 19.7327 5.72749L12.3327 3.11549C12.1175 3.03963 11.8829 3.03963 11.6677 3.11549L4.26872 5.72849C4.05178 5.80506 3.86787 5.9541 3.74801 6.15047C3.62815 6.34684 3.57966 6.57854 3.61072 6.80649L4.93372 16.5105C4.95435 16.6626 5.00973 16.808 5.09557 16.9353C5.18141 17.0625 5.2954 17.1674 5.42872 17.2435Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 15L12 7L15 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 13H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82818">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
