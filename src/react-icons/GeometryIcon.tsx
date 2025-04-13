import React from "react";

export const GeometryIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72907)">
<path d="M7 21L11 9M13 9L14.48 13.439M15.429 16.286L17 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 7C10 7.53043 10.2107 8.03914 10.5858 8.41421C10.9609 8.78929 11.4696 9 12 9C12.5304 9 13.0391 8.78929 13.4142 8.41421C13.7893 8.03914 14 7.53043 14 7C14 6.46957 13.7893 5.96086 13.4142 5.58579C13.0391 5.21071 12.5304 5 12 5C11.4696 5 10.9609 5.21071 10.5858 5.58579C10.2107 5.96086 10 6.46957 10 7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12C5.526 14.955 8.588 17 12 17C15.41 17 18.473 14.952 20 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72907">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
