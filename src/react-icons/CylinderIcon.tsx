import React from "react";

export const CylinderIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77051)">
<path d="M5 6C5 6.39397 5.18106 6.78407 5.53284 7.14805C5.88463 7.51203 6.40024 7.84274 7.05025 8.12132C7.70026 8.3999 8.47194 8.62087 9.32122 8.77164C10.1705 8.9224 11.0807 9 12 9C12.9193 9 13.8295 8.9224 14.6788 8.77164C15.5281 8.62087 16.2997 8.3999 16.9497 8.12132C17.5998 7.84274 18.1154 7.51203 18.4672 7.14805C18.8189 6.78407 19 6.39397 19 6C19 5.60603 18.8189 5.21593 18.4672 4.85195C18.1154 4.48797 17.5998 4.15726 16.9497 3.87868C16.2997 3.6001 15.5281 3.37913 14.6788 3.22836C13.8295 3.0776 12.9193 3 12 3C11.0807 3 10.1705 3.0776 9.32122 3.22836C8.47194 3.37913 7.70026 3.6001 7.05025 3.87868C6.40024 4.15726 5.88463 4.48797 5.53284 4.85195C5.18106 5.21593 5 5.60603 5 6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 6V18C5 19.657 8.134 21 12 21C15.866 21 19 19.657 19 18V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77051">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
