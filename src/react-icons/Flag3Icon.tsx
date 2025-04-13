import React from "react";

export const Flag3Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58176)">
<path d="M19 4C19.852 4 20.297 4.986 19.783 5.623L19.707 5.707L15.915 9.5L19.707 13.293C20.31 13.895 19.927 14.907 19.114 14.994L19 15H6V21C5.99997 21.2449 5.91004 21.4813 5.74728 21.6644C5.58453 21.8474 5.36025 21.9643 5.117 21.993L5 22C4.75507 22 4.51866 21.91 4.33563 21.7473C4.15259 21.5845 4.03566 21.3603 4.007 21.117L4 21V5C4.00003 4.75507 4.08996 4.51866 4.25272 4.33563C4.41547 4.15259 4.63975 4.03566 4.883 4.007L5 4H19Z" />
</g>
<defs>
<clipPath id="clip0_802_58176">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
