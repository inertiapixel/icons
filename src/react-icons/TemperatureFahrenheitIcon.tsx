import React from "react";

export const TemperatureFahrenheitIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61962)">
<path d="M4 8C4 8.53043 4.21071 9.03914 4.58579 9.41421C4.96086 9.78929 5.46957 10 6 10C6.53043 10 7.03914 9.78929 7.41421 9.41421C7.78929 9.03914 8 8.53043 8 8C8 7.46957 7.78929 6.96086 7.41421 6.58579C7.03914 6.21071 6.53043 6 6 6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 12H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 6H14C13.7348 6 13.4804 6.10536 13.2929 6.29289C13.1054 6.48043 13 6.73478 13 7V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61962">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
