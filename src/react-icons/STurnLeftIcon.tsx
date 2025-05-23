import React from "react";

export const STurnLeftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64690)">
<path d="M19 7C18.4696 7 17.9609 6.78929 17.5858 6.41421C17.2107 6.03914 17 5.53043 17 5C17 4.46957 17.2107 3.96086 17.5858 3.58579C17.9609 3.21071 18.4696 3 19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5C21 5.53043 20.7893 6.03914 20.4142 6.41421C20.0391 6.78929 19.5304 7 19 7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 5H7.5C6.57174 5 5.6815 5.36875 5.02513 6.02513C4.36875 6.6815 4 7.57174 4 8.5C4 9.42826 4.36875 10.3185 5.02513 10.9749C5.6815 11.6313 6.57174 12 7.5 12H16.5C17.4283 12 18.3185 12.3687 18.9749 13.0251C19.6313 13.6815 20 14.5717 20 15.5C20 16.4283 19.6313 17.3185 18.9749 17.9749C18.3185 18.6313 17.4283 19 16.5 19H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 16L3 19L6 22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64690">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
