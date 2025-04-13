import React from "react";

export const Multiplier2xIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67881)">
<path d="M14 16L18 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 16L14 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10C6 9.46957 6.21071 8.96086 6.58579 8.58579C6.96086 8.21071 7.46957 8 8 8C8.53043 8 9.03914 8.21071 9.41421 8.58579C9.78929 8.96086 10 9.46957 10 10C10 10.591 9.583 11.318 9.184 11.858L6 16.001H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67881">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
