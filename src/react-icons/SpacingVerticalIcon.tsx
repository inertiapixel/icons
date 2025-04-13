import React from "react";

export const SpacingVerticalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63268)">
<path d="M4 20V18C4 17.4696 4.21071 16.9609 4.58579 16.5858C4.96086 16.2107 5.46957 16 6 16H18C18.5304 16 19.0391 16.2107 19.4142 16.5858C19.7893 16.9609 20 17.4696 20 18V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4V6C4 6.53043 4.21071 7.03914 4.58579 7.41421C4.96086 7.78929 5.46957 8 6 8H18C18.5304 8 19.0391 7.78929 19.4142 7.41421C19.7893 7.03914 20 6.53043 20 6V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63268">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
