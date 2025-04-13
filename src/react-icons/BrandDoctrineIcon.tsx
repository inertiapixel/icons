import React from "react";

export const BrandDoctrineIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82400)">
<path d="M5 14C5 14.9193 5.18106 15.8295 5.53284 16.6788C5.88463 17.5281 6.40024 18.2997 7.05025 18.9497C7.70026 19.5998 8.47194 20.1154 9.32122 20.4672C10.1705 20.8189 11.0807 21 12 21C12.9193 21 13.8295 20.8189 14.6788 20.4672C15.5281 20.1154 16.2997 19.5998 16.9497 18.9497C17.5998 18.2997 18.1154 17.5281 18.4672 16.6788C18.8189 15.8295 19 14.9193 19 14C19 13.0807 18.8189 12.1705 18.4672 11.3212C18.1154 10.4719 17.5998 9.70026 16.9497 9.05025C16.2997 8.40024 15.5281 7.88463 14.6788 7.53284C13.8295 7.18106 12.9193 7 12 7C11.0807 7 10.1705 7.18106 9.32122 7.53284C8.47194 7.88463 7.70026 8.40024 7.05025 9.05025C6.40024 9.70026 5.88463 10.4719 5.53284 11.3212C5.18106 12.1705 5 13.0807 5 14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 14H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11L15 14L12 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 3L16.9 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82400">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
