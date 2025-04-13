import React from "react";

export const Flag2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58179)">
<path d="M19 4C19.2449 4.00003 19.4813 4.08996 19.6644 4.25272C19.8474 4.41547 19.9643 4.63975 19.993 4.883L20 5V14C20 14.2449 19.91 14.4813 19.7473 14.6644C19.5845 14.8474 19.3603 14.9643 19.117 14.993L19 15H6V21C5.99997 21.2449 5.91004 21.4813 5.74728 21.6644C5.58453 21.8474 5.36025 21.9643 5.117 21.993L5 22C4.75507 22 4.51866 21.91 4.33563 21.7473C4.15259 21.5845 4.03566 21.3603 4.007 21.117L4 21V5C4.00003 4.75507 4.08996 4.51866 4.25272 4.33563C4.41547 4.15259 4.63975 4.03566 4.883 4.007L5 4H19Z" />
</g>
<defs>
<clipPath id="clip0_802_58179">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
