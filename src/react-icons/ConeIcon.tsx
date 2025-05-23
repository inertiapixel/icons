import React from "react";

export const ConeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58313)">
<path d="M12 1.001C12.72 1.001 13.385 1.388 13.749 2.031L21.879 17.021C21.9584 17.1674 22 17.3314 22 17.498V17.996C22 20.456 17.694 21.941 12.323 21.998L12 22C6.48 22 2 20.505 2 17.997V17.497C1.99997 17.3304 2.04156 17.1664 2.121 17.02L10.26 2.015C10.4343 1.707 10.6872 1.45076 10.9929 1.27244C11.2986 1.09412 11.6461 1.00011 12 1" />
</g>
<defs>
<clipPath id="clip0_802_58313">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
