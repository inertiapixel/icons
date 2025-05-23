import React from "react";

export const CrutchesIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77548)">
<path d="M8 5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H14C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5C16 5.53043 15.7893 6.03914 15.4142 6.41421C15.0391 6.78929 14.5304 7 14 7H10C9.46957 7 8.96086 6.78929 8.58579 6.41421C8.21071 6.03914 8 5.53043 8 5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 21H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21V16.908C12.0001 16.3157 12.1754 15.7368 12.504 15.244L13.496 13.756C13.8246 13.2632 13.9999 12.6843 14 12.092V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21V16.908C11.9999 16.3157 11.8246 15.7368 11.496 15.244L10.504 13.756C10.1754 13.2632 10.0001 12.6843 10 12.092V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 11H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77548">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
